from django.http import HttpResponse, JsonResponse
from .models import Menu, ResturantInfo
from .serializers import CafeteriasSerializer, ResturantSerializer
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


class NhlifeDetailMenus(generics.RetrieveUpdateDestroyAPIView):
    #model = Menu
    #queryset = Menu.objects.filter(site='nhlife')
    queryset = Menu.objects.filter(site='nhlife')
    serializer_class = CafeteriasSerializer
    lookup_field = 's_date'

    # def get_object(self, **kwargs):
    #     return Menu.objects.get(s_date=self.kwargs.get("s_date"))


class NhitcenterDetailMenus(generics.RetrieveUpdateDestroyAPIView):
    #model = Menu
    #queryset = Menu.objects.filter(site='nhlife')
    queryset = Menu.objects.filter(site='nhitcenter')
    serializer_class = CafeteriasSerializer
    lookup_field = 's_date'

    # def get_object(self, **kwargs):
    #     return Menu.objects.get(s_date=self.kwargs.get("s_date"))

    # def get_serilizer_context(self, *args, **kwargs):
    #     return {'request': self.request}


class ListResturant(generics.ListCreateAPIView):

    queryset = ResturantInfo.objects.all()
    serializer_class = ResturantSerializer


# class DetailResturant(generics.ListCreateAPIView):

#     serializer_class = CafeteriasSerializer

#     def get_queryset(self):
#         site_code = self.kwargs.get('site_code')
#         return ResturantInfo.objects.all().filter(site_code=site_code)

#     def get_object(self):
#         site_code = self.kwargs.get('site_code')
#         return ResturantInfo.objects.all().filter(site_code=site_code)
