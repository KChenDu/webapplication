from django.shortcuts import render

from .models import Topic

def index(request):
    """The home page for CEEAPP"""
    return render(request, 'ceeapp/index.html')

def topics(request):
    """Show all topics."""
    topics = Topic.objects.order_by('date_added')
    context = {'topics': topics}
    return render(request, 'ceeapp/topics.html', context)
