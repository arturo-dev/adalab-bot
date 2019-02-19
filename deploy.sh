git add .
git commit -m 'misc changes'
git push

#gcloud auth activate-service-account --key-file auth.json
gcloud app deploy app.yml -q