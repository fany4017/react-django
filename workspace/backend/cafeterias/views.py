from django.http import HttpResponse, JsonResponse
from .models import Menu, ResturantInfo, Notice, Advertisement
from .serializers import CafeteriasSerializer, ResturantSerializer, NoticeSerializer, AdvertisementSerializer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from django.shortcuts import render
from django.shortcuts import get_object_or_404


class ListMenus(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = CafeteriasSerializer


class DetailMenus(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CafeteriasSerializer

    def get_object(self):
        s_date = self.kwargs.get('s_date')
        site = self.kwargs.get('site')
        return get_object_or_404(Menu, site=site, s_date=s_date)

# @csrf_exempt : 함수위에만 사용
# def menu_list(request):
#     if request.method == 'GET':
#         menus = Menu.objects.all()
#         serializer = CafeteriasSerializer(menus, many=True)
#         return JsonResponse(serializer.data, safe=False)


class ListResturant(generics.ListCreateAPIView):
    queryset = ResturantInfo.objects.all()
    serializer_class = ResturantSerializer


class ListNotice(generics.ListCreateAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer


class ListAdvertisement(generics.ListCreateAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
