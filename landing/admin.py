from django.contrib import admin

# Register your models here.
from landing.models import Claim


class ClaimAdmin(admin.ModelAdmin):
    list_display = ['client_name', 'phone_number', 'claim_date']
    ordering = ['claim_date']


admin.site.register(Claim, ClaimAdmin)
