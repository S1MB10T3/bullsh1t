from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns




urlpatterns = [
    url(r'^api/checker/create/$', views.LinkCreate.as_view()),
    url(r'^api/checker/delete/(?P<pk>[0-9]+)/$', views.LinkDelete.as_view()),
    url(r'^api/checker/(?P<pk>[0-9]+)/$', views.LinkDetail.as_view()),
    url(r'^api/checker/$', views.LinkList.as_view()),
]
