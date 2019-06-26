from django.contrib import admin

from ceeapp.models import Topic, Entry, Area, Company, Event

admin.site.register(Topic)
admin.site.register(Entry)
admin.site.register(Area)
admin.site.register(Company)
admin.site.register(Event)