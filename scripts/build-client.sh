#!/bin/bash -
#===============================================================================
#
#          FILE: build-client.sh
#
#         USAGE: ./build-client.sh
#
#   DESCRIPTION:
#
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: Carlos Sanchez (), carlos_sanchez@epam.com
#  ORGANIZATION:
#       CREATED: 08/09/22 16:34:27
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error

REPO_DIR=$(cd .. && pwd)

validate_zip ()
{
	ZIP_FILE=$REPO_DIR/dist/client-app.zip
	if [[ -e $ZIP_FILE ]] ; then
		rm $ZIP_FILE
		echo "$(basename $ZIP_FILE) deleted"
	fi
}	# ----------  end of function validate_zip  ----------

#echo $REPO_DIR
#cd $REPO_DIR
printf "############ INSTALLING DEPENDENCIES #############\n\n"
#npm ci
printf "\n\n############ BUILDING APP #############\n\n"
export ENV_CONFIGURATION=production
npm run build --configuration=$ENV_CONFIGURATION

printf "\n\n############ COMPRESSING BUILD #############\n\n"
# Check if client-app.zip exists and delete it before compressing
validate_zip
cd dist
zip -r client-app.zip app
