from rest_framework.serializers import(
    ModelSerializer,
)

from django_apps.checker.models import Link


class LinkCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Link
        fields = [
            'url',
        ]

class LinkListSerializer(ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'


class LinkDetailSerializer(ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'
