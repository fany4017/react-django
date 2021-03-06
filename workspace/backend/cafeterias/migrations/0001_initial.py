# Generated by Django 3.1.7 on 2021-03-12 15:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Site',
            fields=[
                ('site_name', models.CharField(max_length=30)),
                ('site_code', models.CharField(max_length=30, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=30)),
                ('user_password', models.CharField(max_length=30)),
                ('enroll_date', models.DateTimeField(verbose_name='date enrolled')),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('s_date', models.DateField(verbose_name='standard_date')),
                ('breakfast_type_1', models.CharField(blank=True, max_length=200)),
                ('breakfast_type_2', models.CharField(blank=True, max_length=200)),
                ('breakfast_type_3', models.CharField(blank=True, max_length=200)),
                ('lunch_type_1', models.CharField(blank=True, max_length=200)),
                ('lunch_type_2', models.CharField(blank=True, max_length=200)),
                ('lunch_type_3', models.CharField(blank=True, max_length=200)),
                ('lunch_type_4', models.CharField(blank=True, max_length=200)),
                ('dinner_type_1', models.CharField(blank=True, max_length=200)),
                ('dinner_type_2', models.CharField(blank=True, max_length=200)),
                ('dinner_type_3', models.CharField(blank=True, max_length=200)),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafeterias.site')),
            ],
            options={
                'ordering': ['-s_date'],
            },
        ),
    ]
