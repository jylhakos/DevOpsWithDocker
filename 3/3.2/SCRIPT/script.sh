#!/bin/sh

GITHUB_USER="jylhakos"

GITHUB_TOKEN=""

GITHUB_REPOSITORY="github.com/jylhakos/phonebook.git"

REPOSITORY_DIRECTORY="phonebook"

GITHUB_REPOSITORY_URL="https://"$GITHUB_REPOSITORY

DOCKER_USER="jylhakos"

DOCKER_TOKEN=""

DOCKER_IMAGE="jylhakos/phonebook"

DIRECTORY="exercise"

DOCKER_IMAGE_ID=$( docker images -q $DOCKER_IMAGE )

echo $DOCKER_IMAGE_ID

if [ -n $DOCKER_IMAGE_ID ]
then
	echo "REMOVE $DOCKER_IMAGE_ID"

	docker rmi -f $DOCKER_IMAGE_ID
fi

if [ -d $DIRECTORY ]
then
	echo REMOVE $DIRECTORY

	rm -rf $DIRECTORY
fi

echo MAKEDIR $DIRECTORY

mkdir $DIRECTORY

cd $DIRECTORY

pwd

git clone $GITHUB_REPOSITORY_URL

cd $REPOSITORY_DIRECTORY

pwd

npm install

ls -l

docker build -t $DOCKER_IMAGE .

docker login --username $DOCKER_USER --password $DOCKER_TOKEN

docker push $DOCKER_IMAGE