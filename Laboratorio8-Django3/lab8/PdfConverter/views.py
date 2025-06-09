from django.shortcuts import render
from django.http import Http404
from datetime import date
from . import renderers

# Create your views here.
def pdf_view(request):
    data = {
        'today': date.today(),
        'amount': 50.25,
        'customer_name': 'Diego Santa Cruz',
        'invoice_number': 322,
    }

    response = renderers.render_to_pdf('pdfs/invoice.html', data)

    #VERFICACION
    if not response:
        raise Http404("No se pudo generar el PDF.")

    #DESCARGAS
    filename = f"Invoice_{data['invoice_number']}.pdf"
    disposition = "attachment" if request.GET.get("download") else "inline"
    response["Content-Disposition"] = f"{disposition}; filename={filename}"

    return response


