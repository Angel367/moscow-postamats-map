![](https://img.shields.io/badge/Код-замечательный-brightgreen.svg?style=flat)
# moscow-postamats-map

moscow-postamats-map is a Django app to finding the best locations for postamats.
For this process app will use ML, that analyze demography, existing postamats in
some district, and other factors.

Detailed documentation is in the "docs" directory.

## Quick start

1.  Add "map" to your INSTALLED_APPS setting like this:

        INSTALLED_APPS = [
            ...
            'map',
        ]

2.  Include the map URLconf in your project urls.py like this:

        path('map/', include('map.urls')),

3. Visit <http://127.0.0.1:8000/polls/> to participate in the poll.
