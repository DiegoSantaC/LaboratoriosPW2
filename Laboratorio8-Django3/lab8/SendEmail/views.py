from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def index(request):
    send_mail('HOLA DESDE DJANGO', 
    'HOLA DESDE DJANGO. ESTE ES UN MENSAJE AUTOMATICO',
    'diegosantacruzvila@gmail.com',
    ['dsantacruzv@unsa.edu.pe'],
    fail_silently=False )

    return render(request, 'send/index.html')