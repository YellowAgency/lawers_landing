from django import forms

from landing.models import Claim


class ClaimForm(forms.ModelForm):
    class Meta:
        model = Claim
        fields = ['client_name', 'phone_number', 'claim_text', 'email']

    def clean(self):
        cleaned_data = self.cleaned_data
        phone_number = cleaned_data.get("phone_number")
        email = cleaned_data.get("email")

        if not (phone_number or email):
            raise forms.ValidationError("Требуется заполнить одно из полей")
