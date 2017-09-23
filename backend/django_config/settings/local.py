
import socket

from .base import *


# Webpack Loader by Owais Lane
# ------------------------------------------------------------------------------
# https://github.com/owais/django-webpack-loader

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'builds-dev/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack', 'webpack-stats.dev.json')
    }
}

# Django Debug Toolbar
# ------------------------------------------------------------------------------
# https://github.com/jazzband/django-debug-toolbar

MIDDLEWARE += ('debug_toolbar.middleware.DebugToolbarMiddleware',)

INSTALLED_APPS += ('debug_toolbar', )

ALLOWED_HOSTS = ['0.0.0.0','localhost', '127.0.0.1']

INTERNAL_IPS = ['127.0.0.1', '10.0.2.2', '0.0.0.0']

# Hack to have debug toolbar when developing with docker
ip = socket.gethostbyname(socket.gethostname())
INTERNAL_IPS += [ip[:-1] + "1"]
