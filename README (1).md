# moscow-postamats-map

WEB-сервис с картой для нахождения наиболее оптимального места для размещения постамата. Для этого будет использоваться математическая модель, учитывающая текущие постаматы, количество населения, проживающего в рассматриваемой области, и другие параметры.

Документация расположена в папке \"docs\".

## Quick start

1.  Добавьте \"map\" в ваши INSTALLED_APPS:

        INSTALLED_APPS = [
            ...
            'map',
        ]

2.  Добавьте ссылки map в вашу URLconf (urls.py):

        path('map/', include('map.urls')),

3.  Start the development server and visit
    <http://127.0.0.1:8000/admin/> to create a poll (you\'ll need the
    Admin app enabled).

4.  Visit <http://127.0.0.1:8000/polls/> to participate in the poll.
