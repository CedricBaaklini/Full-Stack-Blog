from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType

import models
import graphene


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class AuthorType(DjangoObjectType):
    class Meta:
        model = models.Profile


class PostType(DjangoObjectType):
    class Meta:
        model = models.Post


class TagType(DjangoObjectType):
    class Meta:
        model = models.Tag


class Query(graphene.ObjectType):
    all_posts = graphene.List(PostType)
    author_by_username = graphene.Field(AuthorType, username = graphene.String())
