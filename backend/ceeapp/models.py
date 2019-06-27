from django.db import models


class Area(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Company(models.Model):
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    website_url = models.CharField(max_length=200)
    likes = models.PositiveIntegerField(default=0)
    #image = models.ImageField(upload_to='uploads/')

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
