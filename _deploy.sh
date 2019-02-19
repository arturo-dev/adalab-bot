gcloud config set project adalab
gcloud auth activate-service-account --key-file auth.json
gcloud app deploy app.yml -q