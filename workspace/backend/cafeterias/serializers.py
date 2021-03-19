from rest_framework import serializers
from .models import Site, Menu, ResturantInfo, Notice  # 테이블 임포트


class CafeteriasSerializer(serializers.ModelSerializer):  # 모델(테이블)별로 다름
    class Meta:
        model = Menu
        fields = '__all__'
        #lookup_field = 's_date'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'slug'}
        # }


class ResturantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResturantInfo
        fields = '__all__'


class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'
