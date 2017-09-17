from rest_framework.response import Response

from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    DestroyAPIView,
    RetrieveAPIView,
    )

from rest_framework.permissions import (
    AllowAny,
    )

from .serializers import *


class LinkCreate(CreateAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkCreateUpdateSerializer
    permission_classes = [AllowAny]

class LinkList(ListAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkListSerializer
    permission_classes = [AllowAny]

class LinkDetail(RetrieveAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkDetailSerializer
    permission_classes = [AllowAny]

class LinkDelete(DestroyAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkDetailSerializer
    permission_classes = [AllowAny]
