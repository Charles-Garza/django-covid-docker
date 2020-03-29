from apscheduler.schedulers.background import BackgroundScheduler
from scheduler import casesAPI

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(casesAPI.gather_all_info, 'interval', hours=3)
    scheduler.start()
