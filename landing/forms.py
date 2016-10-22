from django import forms

from landing.models import Claim


class ClaimForm(forms.ModelForm):
    class Meta:
        model = Claim
        fields = ['phone_number', 'claim_text']
