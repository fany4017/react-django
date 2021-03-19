# Generated by Django 3.1.7 on 2021-03-16 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cafeterias', '0004_resturantinfo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='제목을 입력하세요', max_length=100)),
                ('content', models.TextField(help_text='내용을 입력하세요')),
                ('enroll_date', models.DateTimeField(verbose_name='date enrolled')),
            ],
            options={
                'ordering': ['-enroll_date'],
            },
        ),
    ]