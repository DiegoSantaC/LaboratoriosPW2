from django.shortcuts import render
from django.http import Http404
from datetime import date
from . import renderers

# Create your views here.
def pdf_view(request, *args, **kwargs):
    data = {
        'today': date.today(), 
        'amount': 39.99,
        'customer_name': 'Cooper Mann',
        'invoice_number': 1233434,
    }
    return renderers.render_to_pdf('pdfs/invoice.html', data)


