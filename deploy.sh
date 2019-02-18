echo $FILE_AUTH > auth.json


GOOGLE_APPLICATION_CREDENTIALS=./auth.json
gcloud auth application-default login
gcloud app deploy app.yml