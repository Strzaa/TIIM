#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <image_name>"
  exit 1
fi

image_name="$1"

sudo docker pull "$image_name"

if sudo docker pull "$image_name" | grep "Image is up to date"; then
  echo "Image is up to date. Exiting..."
  exit 0
else
  echo "New version of the image is available. Building..."
  if [ "$image_name" == "strzaa/postgres_app:postgres-1.0" ]; then
    docker build "$image_name" ./postgres
  fi
  if [ "$image_name" == "strzaa/react_app:react-1.0" ]; then
    docker build "$image_name" ./react
  fi
  if [ "$image_name" == "strzaa/django_app:django-1.0" ]; then
    docker build "$image_name" ./wyp_backend
  fi
  docker push "$image_name"
fi