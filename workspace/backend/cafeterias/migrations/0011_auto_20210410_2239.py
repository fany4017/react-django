# Generated by Django 3.1.7 on 2021-04-10 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cafeterias', '0010_auto_20210408_2237'),
    ]

    operations = [
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_food1',
            field=models.FileField(blank=True, help_text='식당 음식 이미지1', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_food2',
            field=models.FileField(blank=True, help_text='식당 음식 이미지2', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_food3',
            field=models.FileField(blank=True, help_text='식당 음식 이미지3', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_food4',
            field=models.FileField(blank=True, help_text='식당 음식 이미지4', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_food5',
            field=models.FileField(blank=True, help_text='식당 음식 이미지5', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_front1',
            field=models.FileField(blank=True, help_text='식당 전경 이미지1', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_front2',
            field=models.FileField(blank=True, help_text='식당 전경 이미지2', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_front3',
            field=models.FileField(blank=True, help_text='식당 전경 이미지3', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_inside1',
            field=models.FileField(blank=True, help_text='식당 내부 이미지1', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_inside2',
            field=models.FileField(blank=True, help_text='식당 내부 이미지2', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_inside3',
            field=models.FileField(blank=True, help_text='식당 내부 이미지3', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_menu1',
            field=models.FileField(blank=True, help_text='식당 메뉴판 이미지1', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_menu2',
            field=models.FileField(blank=True, help_text='식당 메뉴판 이미지2', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_menu3',
            field=models.FileField(blank=True, help_text='식당 메뉴판 이미지3', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_parking1',
            field=models.FileField(blank=True, help_text='식당 주차장 이미지1', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_parking2',
            field=models.FileField(blank=True, help_text='식당 주차장 이미지2', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_room1',
            field=models.FileField(blank=True, help_text='식당 룸 이미지1', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_room2',
            field=models.FileField(blank=True, help_text='식당 룸 이미지2', upload_to='resturant_image'),
        ),
        migrations.AddField(
            model_name='resturantinfo',
            name='resturant_image_room3',
            field=models.FileField(blank=True, help_text='식당 룸 이미지3', upload_to='resturant_image'),
        ),
        migrations.AlterField(
            model_name='resturantinfo',
            name='resturant_image',
            field=models.FileField(blank=True, help_text='식당 대표 이미지1', upload_to='resturant_image'),
        ),
    ]
