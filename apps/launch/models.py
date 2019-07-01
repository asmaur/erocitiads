from django.db import models

# Create your models here.

class NewsLettersAds(models.Model):
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email