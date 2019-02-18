echo $FILE_AUTH > auth.json

gcloud auth activate-service-account --key-file auth.json
gcloud app deploy app.yml --quiet