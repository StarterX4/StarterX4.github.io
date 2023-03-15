#!/bin/bash
BINDIR=$(dirname "$(readlink -fn "$0")")
npx tiddlywiki satwiki --listen
