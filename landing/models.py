from django.core import validators
from django.db import models

# Create your models here.


class Claim(models.Model):
    phone_regex = validators.RegexValidator(regex=r'^\+7 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}$',
                                            message="Формат телефонного номера: '+7 (916) 317 14 89'.")

    client_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=18, validators=[phone_regex])
    claim_text = models.TextField(max_length=500, blank=True)
    email = models.EmailField(blank=True)
    claim_date = models.DateTimeField(auto_now_add=True)
