from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from scheduler import casesAPI

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(casesAPI.update_cases, 'interval', minutes=180)
    scheduler.start()