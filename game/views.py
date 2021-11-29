from django.http import HttpResponse

# Create your views here.

def index(request):
    line = '<h1 style="text-align:center">Hello World</h1>'
    return HttpResponse(line)
