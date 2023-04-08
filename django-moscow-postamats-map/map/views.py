from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse


def index_view(request):
    """
    Функция, выполняющая рендер основной страницы.
    """
    # template = loader.get_template('')
    return render(request, 'map/index.html')

    # return HttpResponse("Hello, world. You're at the polls index.")


def map_view(request):
    # template = loader.get_template('')
    return render(request, 'map/map.html')


def contacts_view(request):
    # template = loader.get_template('')
    return render(request, 'map/contacts.html')


def docs_view(request):
    # template = loader.get_template('')
    return render(request, 'map/docs/docs.html')


def docs_data_view(request):
    return render(request, 'map/docs/data_index.html')


def docs_models_view(request):
    return render(request, 'map/docs/models_index.html')


def docs_thesis_view(request):
    return render(request, 'map/docs/thesis_index.html')
