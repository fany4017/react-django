# Generated by Django 3.1.7 on 2021-03-25 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cafeterias', '0006_advertisement'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisement',
            name='useyn',
            field=models.CharField(default='y', help_text='사용여부를 입력하세요(기본값은 y입니다)', max_length=1),
        ),
    ]
