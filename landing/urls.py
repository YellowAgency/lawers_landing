from django.conf.urls import url

from landing import views

app_name = 'landing'
urlpatterns = [
    url('^$', views.Index.as_view(), name='index'),
    url('^process/$', views.ProcessForm.as_view(), name='process'),
]
