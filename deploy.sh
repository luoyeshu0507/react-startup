#!/bin/bash
user=hyperchain
root=/home/hyperchain/hybaas
host=139.219.11.107

echo 'clean remote...'
ssh -l ${user} ${host} > /dev/null 2>&1 << eeooff
cd ${root}
rm -rf ./*
exit
eeooff
echo 'deploy...'
scp -r ./dist/* ${user}@${host}:${root}
echo 'done.'
echo 'http://139.219.11.107:7000'