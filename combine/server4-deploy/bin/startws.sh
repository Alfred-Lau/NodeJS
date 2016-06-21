#!/bin/sh
if [ ! -f "pid" ]
then
# 注意：此处的文件路径必须加上./或者../,否则执行出错
    node ./lib/daemon.js ./conf/config.json &
    echo $! > pid
fi