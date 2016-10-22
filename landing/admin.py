from django.contrib import admin

from landing.models import Claim


class ClaimAdmin(admin.ModelAdmin):
    list_display = ['phone_number', 'claim_text', 'claim_date', 'seen']
    ordering = ['claim_date']


admin.site.register(Claim, ClaimAdmin)
