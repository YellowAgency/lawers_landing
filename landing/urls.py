from django.conf.urls import url

from landing.views import index

urlpatterns = [
    url('^$', index, name='index'),
]
