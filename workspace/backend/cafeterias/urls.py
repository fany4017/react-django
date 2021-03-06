from django.urls import path
from . import views

urlpatterns = [
    #path('', views.index, name='index'),
    path('cafeteria/', views.ListMenus.as_view()),
    path('cafeteria/<slug:site>/<slug:s_date>', views.DetailMenus.as_view()),
    path('resturant/', views.ListResturant.as_view()),
    path('notice/', views.ListNotice.as_view()),
    path('advertisement/', views.ListAdvertisement.as_view()),
    path('create/review/', views.CreateReview.as_view())
]
