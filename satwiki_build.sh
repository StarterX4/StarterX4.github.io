#!/bin/bash
BINDIR=$(dirname "$(readlink -fn "$0")")
npx tiddlywiki satwiki --rendertiddler $:/core/save/all index.html text/plain
