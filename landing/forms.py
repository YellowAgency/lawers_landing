from django import forms

from landing.models import Claim


class ClaimForm(forms.ModelForm):
    class Meta:
        model = Claim
        fields = ['client_name', 'phone_number', 'claim_text', 'email']
