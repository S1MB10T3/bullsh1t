from django.db import models
from django.conf import settings
from .crawler import *



class Link(models.Model):
    url = models.TextField()
    name = models.CharField(max_length = 50, db_index = True)
    text  = models.TextField()
    bullshitMeter = models.DecimalField(
        max_digits = 10,
        decimal_places = 1,
        default = 0,
    )

    def save(self, **kwargs):
        if not self.pk:
            self.text = getText(self.url)
            #self.name = getTitle(self.url)
            self.bullshitMeter = countWords(self.text)

        super(Link, self).save(**kwargs)
