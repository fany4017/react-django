# Generated by Django 3.1.7 on 2021-03-25 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cafeterias', '0005_notice'),
    ]

    operations = [
        migrations.CreateModel(
            name='Advertisement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.CharField(help_text='링크를 입력하세요', max_length=300)),
                ('useyn', models.TextField(default='y')),
                ('enroll_date', models.DateTimeField(verbose_name='date enrolled')),
            ],
            options={
                'ordering': ['-enroll_date'],
            },
        ),
    ]