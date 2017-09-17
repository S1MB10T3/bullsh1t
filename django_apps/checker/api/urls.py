from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns




urlpatterns = [
    url(r'^api/listings/create/$', views.ListingCreate.as_view()),
    url(r'^api/listings/delte/(?P<pk>[0-9]+)/$', views.ListingDelete.as_view()),
    url(r'^api/listings/(?P<pk>[0-9]+)/$', views.ListingDetial.as_view()),
    url(r'^api/listings/$', views.ListingList.as_view()),
]
