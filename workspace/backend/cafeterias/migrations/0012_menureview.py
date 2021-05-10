# Generated by Django 3.1.7 on 2021-04-17 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cafeterias', '0011_auto_20210410_2239'),
    ]

    operations = [
        migrations.CreateModel(
            name='MenuReview',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_code', models.CharField(blank=True, max_length=30)),
                ('site_name', models.CharField(blank=True, max_length=30)),
                ('s_date', models.DateField(verbose_name='standard_date')),
                ('email', models.TextField(blank=True)),
                ('opinion', models.TextField(blank=True)),
                ('enroll_date', models.DateTimeField(verbose_name='date enrolled')),
            ],
            options={
                'ordering': ['-enroll_date'],
            },
        ),
    ]