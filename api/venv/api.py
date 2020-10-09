import time
from flask import Flask
from app import app
from flask_login import current_user, login_user
from app.models import User

@app.route('/venv/api/time')
def get_current_time():
    return {'user': time.time()}