# kill the container if it exists
docker kill logty_la
# build an image
docker build --rm -f "local.Dockerfile" -t logty_la:latest .
# run the image
docker run --rm -d --name logty_la -p 8002:80 logty_la:latest
