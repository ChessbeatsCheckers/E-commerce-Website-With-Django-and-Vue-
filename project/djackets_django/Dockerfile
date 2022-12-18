From python:3.11-slim-buster
#FROM alpine:3.14

WORKDIR /db

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
