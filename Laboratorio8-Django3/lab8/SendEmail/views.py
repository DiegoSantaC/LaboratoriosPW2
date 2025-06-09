from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def index(request):
    send_mail('Hello from PrettyPrinted', 
    'Hello there. This is an automated message',
    'diegosantacruzvila@gmail.com',
    ['dsantacruzv@unsa.edu.pe'],
    fail_silently=False )
    
    return render(request, 'send/index.html')