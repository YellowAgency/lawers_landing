from django.shortcuts import render, render_to_response


# Create your views here.
from django.template import RequestContext

from landing.forms import ClaimForm


def index(request):
    if request.method == 'POST':
        form = ClaimForm()
    return render_to_response('index.html', context=RequestContext(request))
