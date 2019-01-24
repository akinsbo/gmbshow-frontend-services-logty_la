# Export docker container snapshot as tar file
docker export logty_la > logty_la-container.tar

# extract the tar file
tar xvf logty_la-container.tar