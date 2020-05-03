from apscheduler.schedulers.background import BackgroundScheduler
from scheduler import casesAPI

def start():
    # Call at the beginning once to update data
    # if data exist, otherwise if none exist,
    # populate the database.
    casesAPI.gather_all_info()

    # Start scheduler each x amount of minutes to update database
    # from the connected api.
    scheduler = BackgroundScheduler()
    scheduler.add_job(casesAPI.gather_all_info, 'interval', minutes=30)
    scheduler.start()
