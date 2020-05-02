# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.8.0-alpine

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

# Set the working directory to /usr/src/app
RUN mkdir /app
WORKDIR /app

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip

ADD requirements.txt /app/
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app

