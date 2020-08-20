#!/bin/bash
# A shell script to run utilities on the docker images and contianer s

###############################
#  	     Constants        #
###############################
PROG="$(basename "${0}")"
SCRIPT_DIR="$(cd "$(dirname "${0}")" && pwd)"
CONTAINER_NAME=logty_la
DOCKERFILE=Dockerfile
DOCKER_DIR=./docker
IMAGE_NAME=${CONTAINER_NAME}:latest
HOST_PORT_NUMBER=8002
BUILD=0
CONTAINER_SNAPSHOT_DIR_NAME=${CONTAINER_NAME}-container
CONTAINER_SNAPSHOT_ARCHIVE_NAME=${CONTAINER_SNAPSHOT_DIR_NAME}.tar
VERBOSE=0

usage() {
  echo -e "USAGE: ${PROG} [-ghvy] [-c CLI]"
}

help_exit() {
  usage
  echo "This is a utility script for deploying heketi (and optionally GlusterFS) in a
Kubernetes environment."
  exit 0
}

# Prints msg to stdout
output(){
    #@---all arguments = out---@#
  out="${*}"
    #@--- allow backslashes in echo ---@#
  opts="-e"
  # echo allowing backslashes
  # echo -e "arguments"
  echo "$opts" "${out}"
}

#### Build and run the image]
build(){
if [[ $BUILD -eq 1 ]]; then
# kill the container if it exists
docker kill ${CONTAINER_NAME}
# build an image
docker build --rm -f ${DOCKER_DIR}/${DOCKERFILE} -t ${IMAGE_NAME} .
# run the image
docker run --rm -d --name ${CONTAINER_NAME} -p HOST_PORT_NUMBER:80 ${IMAGE_NAME}
else
output "Image already built"
fi
}

#### Explore a snapshot of the container ####
explore_container_snapshot(){
# Export docker container snapshot as tar file
docker export ${CONTAINER_NAME} > ${CONTAINER_SNAPSHOT_DIR_NAME}
# extract the tar file
tar xvf ${CONTAINER_SNAPSHOT_ARCHIVE_NAME}
}

#### Delete the container snapshot ####
delete_container_snapshot(){
# delete the explored directory if present
rm -rf ${CONTAINER_SNAPSHOT_ARCHIVE_NAME}
# delete the extracted folder
rm -rf ${CONTAINER_SNAPSHOT_DIR_NAME}
}

# if first argument is build or -b, then run build with commands 2 and 3

# if arg 2 absent, return error *please specify the container name and dockerfile
# according to the format build -c container-name -d dockerfile

output "print this"
output $#
output $HOST_PORT_NUMBER
echo $0
echo $1
echo $#

#### main method ####
main(){
# if first argument is build or -b, then run build with commands 2 and 3

# if arg 2 absent, return error *please specify the container name and dockerfile
# according to the format build -c container-name -d dockerfile

while [[ $# -ge 1 ]]; do
  key="${1}"
    echo "Your command line contains $# arguments"
    
  case $key in
    -*)
    keylen=${#key}
    keypos=1
    while [[ $keypos -lt $keylen ]]; do
      case ${key:${keypos}} in
        b*|-build)
        BUILD=1
        if [[ "$key" == "--build" ]]; then keypos=$keylen echo 'calling build function'; fi
        ;;
        c*|-container|-container_name)
        CONTAINER_NAME=$(assign "${key:${keypos}}" "${2}")
        if [[ "$key" == "--container"|| "--container_name" ]]; then keypos=$keylen echo 'calling build function'; fi
        ;;
        d*|-dockerfile)
        DOCKERFILE=$(assign "${key:${keypos}}" "${2}")
        if [[ "$key" == "--dockerfile"|| "--container_name" ]]; then keypos=$keylen echo 'calling build function'; fi
        ;;
        del*|-delete)
        delete_container_snapshot
        ;;
        e*|-explore)
        explore_container_snapshot
        ;;
        h*|-help)
        help_exit
        ;;
        i*|-image|-image_name)
        IMAGE_NAME=$(assign "${key:${keypos}}" "${2}")
        if [[ "$key" == "--image" || "--image_name" ]]; then keypos=$keylen echo 'calling build function'; fi
        ;;
        p*|-port|-host_number_port)
        HOST_PORT_NUMBER=$(assign "${key:${keypos}}" "${2}")
        if [[ "$key" == "--image" || "--image_name" ]]; then keypos=$keylen echo 'calling build function'; fi
        ;;
        v*|-verbose)
        VERBOSE=1
        if [[ "$key" == "--verbose" ]]; then keypos=$keylen; fi
        ;;
        *)
        output "Unknown option '${key:${keypos}}'.\n"
        usage
        exit 1
        ;;
      esac
      ((keypos++))
    done
    ;;
    *)
    output "done"
    ;;
  esac
  shift
done

build
}

# Call main function with the supplied arguments
main $@