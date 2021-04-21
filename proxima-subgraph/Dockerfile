FROM golang:alpine
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go build -o main .
# TODO use the .env vars to set the queryHandler
# https://github.com/docker/docker.github.io/blob/master/docker-hub/builds/index.md

# https://aws.amazon.com/blogs/containers/create-a-ci-cd-pipeline-for-amazon-ecs-with-github-actions-and-aws-codebuild-tests/
EXPOSE 4000
# TODO designed to run the server
CMD ["./main"]
