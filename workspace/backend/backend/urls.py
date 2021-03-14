from django.contrib import admin
from django.urls import include, path

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # 내가만든 app 의 url을 추가 (만든앱의 용도는 api이기 때문에 api/로 지정함)
    path('api/', include('cafeterias.urls')),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
