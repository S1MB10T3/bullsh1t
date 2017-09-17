from django.db import models
from django.conf import settings
from .crawler import *



class Link(models.Model):
    name = models.CharField(max_length = 50, db_index = True)
    url = models.TextField()
    text  = models.TextField()
    bullshitMeter = models.DecimalField(
        max_digits = 10,
        decimal_places = 1
    )

    def save(self, **kwargs):
        if not self.pk:
            text = getText(url)
            name = getTitle(url)
