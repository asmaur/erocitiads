from django.shortcuts import render, HttpResponse
import json
from .models import *
# Create your views here.

def index(request):
    return render(request, "launch/coming-timer.html")

def newsletter(request):

    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))

        try:
            #print("trying")
            news = NewsLettersAds(email=data["email"])
            news.save()
            response = {"message": "Seu email foi salvo com successo. Será notificado no lançamento da plataforma. Obrigado pela confiança.!"}

            return HttpResponse(status=200, content_type='application/json', content=json.dumps(response))

        except Exception as ex:
            print(ex)
            response = {"message": "Não foi possível salvar seu email. Tente novamente mais tarde."}

            return HttpResponse(status=400, content_type='application/json', content=json.dumps(response))

    response = {"message":"Algo deu errado. Tente mais tarde"}
    print(response)
    return HttpResponse(status=400, content_type='application/json', content=json.dumps(response))