from django.apps import AppConfig


class CovidConfig(AppConfig):
    name = 'covid'

    def ready(self):
        from scheduler import updater
        updater.start()
