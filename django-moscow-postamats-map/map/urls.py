from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('contacts/', views.contacts_view, name='contacts'),
    path('map/', views.map_view, name='map'),
    path('docs/', views.docs_view, name='docs'),
    path('docs/data/', views.docs_data_view, name='docs_data'),
    path('docs/models/', views.docs_models_view, name='models_data'),
    path('docs/thesis/', views.docs_thesis_view, name='thesis_data'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
