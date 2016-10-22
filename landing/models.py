from django.core import validators
from django.db import models


class Claim(models.Model):
    phone_regex = validators.RegexValidator(regex=r'^\+7 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}$',
                                            message="Формат телефонного номера: '+7 (916) 317 14 89'.")

    phone_number = models.CharField(max_length=18, validators=[phone_regex])
    claim_text = models.TextField(max_length=500, blank=True)
    claim_date = models.DateTimeField(auto_now_add=True)
    seen = models.BooleanField(default=False)

    def __str__(self):
        return 'Телефон: {phone_number}, Просмотрено: {seen}'.format(
            phone_number=self.phone_number,
            seen='Да' if self.seen else 'Нет',
        )
