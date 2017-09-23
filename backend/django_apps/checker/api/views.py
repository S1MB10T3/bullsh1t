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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        link = Link.objects.filter(id= serializer.instance.id)[0]
        return Response({'text':link.text, 'bullshit':link.bullshitMeter})


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
