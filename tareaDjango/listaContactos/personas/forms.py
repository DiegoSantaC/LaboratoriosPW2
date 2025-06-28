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
    def clean_nombres(self, *args, **kwargs):
        print('paso')
        name= self.cleaned_data.get('nombres')
        if name.istitle():
            return name
        else:
            raise forms.ValidationError('La primera letra en mayusculas')

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

    def get_absolute_url(self):
        return "/personas/"+ str(self.id) + "/"

