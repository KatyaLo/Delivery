from app import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app import login

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

class Delivery(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    delivery_num = db.Column(db.Integer, index=True, unique=True)
    delivery_cost = db.Column(db.Integer)
    delivery_time = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    courier_id = db.Column(db.Integer, db.ForeignKey('courier.id'))
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'))

    def __repr__(self):
        return '<Delivery {}>'.format(self.delivery_num) 

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    delivery = db.relationship('Delivery', backref='author', lazy='dynamic')

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return '<User {}>'.format(self.name)

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True)
    delivery = db.relationship('Delivery', backref='service', lazy='dynamic', primaryjoin='Service.id == Delivery.service_id')
    
    def __repr__(self):
        return '<Service {}>'.format(self.name) 

class Courier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True)
    tel = db.Column(db.String(64), index=True, unique=True)
    delivery = db.relationship('Delivery', backref='courier', lazy='dynamic', primaryjoin='Courier.id == Delivery.courier_id')

    def __repr__(self):
        return '<Courier {}>'.format(self.name)

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True)
    tel = db.Column(db.String(64), index=True, unique=True)
    metro = db.Column(db.String(64))
    exit = db.Column(db.Integer)
    info = db.Column(db.String(128))
    cost = db.Column(db.Integer)
    delivery = db.relationship('Delivery', backref='client', lazy='dynamic', primaryjoin='Client.id == Delivery.client_id')

    def __repr__(self):
        return '<Client {}>'.format(self.name)
