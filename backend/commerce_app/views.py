from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.
@api_view(['get'])
def getRoutes(request):
    return Response("hello")


@api_view(['get'])
def getProducts(request):
    return Response(products)


@api_view(['get'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
    return Response(product)
