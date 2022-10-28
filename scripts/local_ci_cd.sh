#!/bin/bash -
#===============================================================================
#
#          FILE: local_ci_cd.sh
#
#         USAGE: ./local_ci_cd.sh
#
#   DESCRIPTION:
#
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: Carlos Sanchez (), carlos_sanchez@epam.com
#  ORGANIZATION:
#       CREATED: 10/23/22 22:02:30
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error

printf "############ LINT #############\n\n"
npm run lint
printf "\n\n############ TESTS #############\n\n"
npm run test:ci
printf "\n\n############ NPM AUDIT #############\n\n"
npm audit
printf "\n\n############ STATIC ANALYSIS #############\n\n"
npm run static:local
./scripts/build-client.sh
./scripts/ssh_deploy-app.sh


