from django.contrib import admin
from .models import UserInfo, Site, Menu, ResturantInfo, AppCode, Notice, Advertisement  # 모델 임포트
# Register your models here.
admin.site.register(UserInfo)  # 관리할 모델을 등록
admin.site.register(AppCode)
admin.site.register(Notice)


class SiteAdmin(admin.ModelAdmin):
    list_display = ('site_name', 'site_code')


class MenuAdmin(admin.ModelAdmin):
    list_display = ('site', 's_date')
    list_filter = ['site']


class ResturantInfoAdmin(admin.ModelAdmin):
    list_display = ('site_code', 'resturant_name', 'enroll_date')
    list_filter = ['site_code']


class AdvertisementAdmin(admin.ModelAdmin):
    list_display = ('item_name', 'useyn', 'enroll_date')
    list_filter = ['useyn']


admin.site.register(Site, SiteAdmin)
admin.site.register(Menu, MenuAdmin)
admin.site.register(ResturantInfo, ResturantInfoAdmin)
admin.site.register(Advertisement, AdvertisementAdmin)
