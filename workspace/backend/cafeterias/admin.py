from django.contrib import admin
from .models import UserInfo, Site, Menu, ResturantInfo, AppCode, Notice  # 모델 임포트
# Register your models here.
admin.site.register(UserInfo)  # 관리할 모델을 등록
admin.site.register(Site)
admin.site.register(Menu)
admin.site.register(ResturantInfo)
admin.site.register(AppCode)
admin.site.register(Notice)
