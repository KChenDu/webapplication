from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'area', views.AreaViewSet)
router.register(r'company', views.CompanyViewSet)
router.register(r'event', views.EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
]