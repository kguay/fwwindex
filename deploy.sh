#!/bin/bash

# Deploy script for Hugo website

harp compile && rsync -avz --delete www/ www-data@www.kevinguay.com:/var/www/html/www.finewoodworkingindex.com

exit 0