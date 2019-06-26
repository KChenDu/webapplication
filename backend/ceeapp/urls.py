"""Defines URL patterns for ceeapp."""
from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    # Home page
    path('', views.index, name='index'),

    # Show all topics.
    path('topics/', views.topics, name='topics'),

    # Detail page for a single topic
    url(r'^topics/(?P<topic_id>\d+)/$', views.topics, name='topic'),

    # Page for adding a new topic
    path('new_topic/', views.new_topic, name='new_topic'),

    # Page for adding a new entry
    url(r'^new_entry/(?P<topic_id>\d+)/$', views.new_entry, name='new_entry'),

    # Page for editing an entry
    url(r'^edit_entry/(?P<entry_id>\d+)/$', views.edit_entry, name='edit_entry'),
]
