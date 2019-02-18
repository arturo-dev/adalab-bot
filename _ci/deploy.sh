kubectl create -f pod.yaml

kubectl expose pod jenkins --name some-jenkins-8080 \
  --type LoadBalancer --port 8080 --protocol TCP