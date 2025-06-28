from django import forms
from .models import Persona

class PersonaForm(forms.ModelForm):
    class Meta:
        model = Persona
        fields = [
            'nombres',
            'apellidos',
            'edad',
            'donador',
        ]

class RawPersonaForm(forms.Form):
    nombres = forms.CharField(label="Tu Nombre: ", 
                widget= forms.Textarea(
                    attrs={
                        'placeholder': 'Solo tu nombre por favor',
                        'id': 'NombreID',
                        'class': 'special',
                        'cols': 10,
                    }
                )
            )
    apellidos = forms.CharField()
    edad = forms.IntegerField(initial=22)
    donador = forms.BooleanField()