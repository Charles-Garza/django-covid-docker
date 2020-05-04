import os
from django.apps import AppConfig

class CovidConfig(AppConfig):
    name = 'covid'
    
    def ready(self):
        # Run the main process only once at the beginning
        # when the server is activated. This way we avoid
        # calling the scheduler multiple times when the 
        # reload process is triggered every time the server
        if os.environ.get('RUN_MAIN', None) != 'true':
            from scheduler import updater
            updater.start()
