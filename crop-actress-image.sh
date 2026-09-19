#!/bin/sh
set -eu

convert "$1" -strip -resize 100x150 "$2"
