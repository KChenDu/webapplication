from django.db import models
from django.contrib.auth.models import User


class Topic(models.Model):
    """A topic the user is learning about"""
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """Return a string representation of the model."""
        return self.text


class Entry(models.Model):
    """Something specific learned about a topic"""
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'entries'

    def __str__(self):
        """Return a string representation of the model."""
        return self.text[:50] + "..."

class Area(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Company(models.Model):
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    #def next_event_date(self):
    #    return self.next_event >= timezone.now()

    #datetime.timedelta(days=1)

class Event(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    description = models.CharField(max_length=200)
    date = models.DateTimeField('date')

    #participants = models.IntegerField(default=0)
    def __str__(self):
        return self.description
