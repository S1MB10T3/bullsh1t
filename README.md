
#Bullsh!t
How bullshit is your startup?

Originally we planned to do something with Ethereum during this hackathon but
it proved to be a lot harder to learn how develop a DApp than we thought. So
we pivoted on the last couple of hours to this...

Bullsh!t is a webapp that reads a website, an about/splash page is recommend,
and scores the site based on the number of tech "buzzwords" that pop up.

Right now the app uses a word bank of "buzzwords" that we thought of in the
moment, but if we had the time training a natural language processor would be
ideal, so it would improve by usage with the assistance of human/user input of
their own rating/review.



https://gist.github.com/Yogendra0Sharma/5aa96ebfd0854623a5451c53672088d5

### Requirements
* [Docker Engine](https://docs.docker.com/engine/installation)
* [Docker Compose](https://docs.docker.com/compose/install)

### Stack
* Postgres
* Django
* Webpack + React
* Mocha for js testing
* Pytest for python testing

### Setup and customize

```
 -git remote add seed https://github.com/cozy-nyc/docker-django-react-seed.git
 -git pull seed master
 -cp server/web/settings/local.py.example server/web/settings/local.py
 
 ```

1. Edit the environement variables
` touch .env`
2. Create env/dev with the following values filled

```
SECRET_KEY=[secret-key]
DEBUG=true
DJANGO_SETTINGS_MODULE=django_config.settings.local
ALLOWED_HOSTS=localhost 127.0.0.1 0.0.0.0
DATABASE_URL=postgres://django:[password]@localhost:5432/[project-name]

MAILGUN_API_KEY=[mailgun-api-key]
MAILGUN_DEFAULT_FROM_EMAIL=[email]

POSTGRES_PASSWORD=[password]
POSTGRES_USER=django
POSTGRES_DB=[project-name]

EMAIL_PORT=1025
EMAIL_HOST=localhost
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
DEFAULT_FROM_EMAIL=[email]
```

Finally, build and start the docker containers:

```
./bin/develop
```

### Run Django commands

```
./bin/django [command]
./bin/django createsuperuser
./bin/django makemigrations [app_name]
```
