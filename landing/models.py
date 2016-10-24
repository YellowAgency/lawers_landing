from django.core import validators
from django.core.mail import send_mail
from django.db import models
from django.utils import formats
from django.utils.timezone import localtime

from lawyer_project import settings


class Claim(models.Model):
    phone_regex = validators.RegexValidator(regex=r'^\+7 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}$',
                                            message="Формат телефонного номера: '+7 (916) 317 14 89'.")

    phone_number = models.CharField(max_length=18, validators=[phone_regex])
    claim_text = models.TextField(max_length=500, blank=True)
    claim_date = models.DateTimeField(auto_now_add=True)
    seen = models.BooleanField(default=False)

    def send_mail_notification(self):
        message = (
            'На сайте "ddu-zakon.ru" создана заявка от {date}.'
            'Описание проблемы: {claim}.\n'
            'Телефон: {phone}.\n'
            '\nС уважением, команда YellowAgency!'
        ).format(
            date=formats.date_format(localtime(self.claim_date), 'o-M-j H:i'),
            claim=self.claim_text or '--Нет описания--',
            phone=self.phone_number,
        )
        send_mail(
            subject='Заявка от сайта "ddu-zakon.ru"',
            message=message,
            from_email='noreply@ddu-zakon.ru',
            recipient_list=[settings.EMAIL_TO, settings.EMAIL_TO_CONTROL],
            fail_silently=True,
        )

    def __str__(self):
        return 'Телефон: {phone_number}, Просмотрено: {seen}'.format(
            phone_number=self.phone_number,
            seen='Да' if self.seen else 'Нет',
        )
