# Generated by Django 2.2.2 on 2019-06-27 07:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('website_url', models.CharField(max_length=200)),
                ('likes', models.PositiveIntegerField(default=0)),
                ('area', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ceeapp.Area')),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=200)),
                ('date', models.DateTimeField(verbose_name='date')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ceeapp.Company')),
            ],
        ),
    ]