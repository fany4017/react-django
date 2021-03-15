from django.urls import path
from . import views

urlpatterns = [
    #path('', views.index, name='index'),
    path('cafeteria/', views.ListMenus.as_view()),
    path('cafeteria/<slug:site>/<slug:s_date>', views.DetailMenus.as_view()),
    path('resturant/', views.ListResturant.as_view()),
]
