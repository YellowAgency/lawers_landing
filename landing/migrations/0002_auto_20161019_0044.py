# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-19 00:44
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='claim',
            name='phone_number',
            field=models.CharField(max_length=18, validators=[django.core.validators.RegexValidator(message="Формат телефонного номера: '+7 (916) 317 14 89'.", regex='^\\+7 \\([0-9]{3}\\) [0-9]{3} [0-9]{2} [0-9]{2}$')]),
        ),
    ]
