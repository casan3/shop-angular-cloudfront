#!/bin/bash

CLIENT_HOST_DIR=$(pwd)

# destination folder names can be changed
CLIENT_REMOTE_DIR=/var/www/lab2_client

check_remote_dir_exists() {
  echo "Check if remote directory exist"

  if ssh mintvm "[ ! -d $1 ]"; then
    echo "Creating: $1"
	ssh -t mintvm "sudo bash -c 'mkdir -p $1 && chown -R sshuser: $1'"
  else
    echo "Clearing: $1"
    ssh mintvm "sudo -S rm -r $1/*"
  fi
}

check_remote_dir_exists $CLIENT_REMOTE_DIR

echo "---> transfering client files, cert and ngingx config - START <---"
echo $CLIENT_HOST_DIR
scp -Cr $CLIENT_HOST_DIR/dist/client-app.zip ../ssl_cert/ mintvm:$CLIENT_REMOTE_DIR
echo "unzip client-app"
ssh mintvm "cd $CLIENT_REMOTE_DIR; unzip client-app.zip"
echo "---> transfering - COMPLETE <---"
