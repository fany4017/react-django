# Generated by Django 3.1.7 on 2021-03-12 15:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cafeterias', '0003_appcode'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResturantInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resturant_name', models.CharField(max_length=50)),
                ('resturant_code', models.CharField(max_length=50)),
                ('resturant_adress', models.CharField(blank=True, max_length=100)),
                ('resturant_tel', models.CharField(blank=True, max_length=15)),
                ('resturant_type', models.CharField(max_length=50)),
                ('title_menu', models.CharField(max_length=50)),
                ('price', models.CharField(blank=True, max_length=20)),
                ('seat_type', models.CharField(blank=True, max_length=50)),
                ('room_is', models.CharField(max_length=50)),
                ('distance', models.CharField(max_length=10)),
                ('resturant_desc', models.CharField(blank=True, max_length=200)),
                ('resturant_image', models.FileField(blank=True, upload_to='resturant_image')),
                ('operating_time', models.CharField(blank=True, max_length=50)),
                ('enroll_date', models.DateTimeField(verbose_name='date enrolled')),
                ('site_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafeterias.site')),
            ],
            options={
                'ordering': ['-enroll_date'],
            },
        ),
    ]