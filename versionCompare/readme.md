
#目的#

考虑到兼容性问题，版本低的不支持某些特性，所以需要根据版本来做不同的处理。

本函数将当前版本与开始支持的版本做比较，返回相应的比较值。


#Params#

* `currentVersion|string` 当前版本，eg: '4.4.4'.
* `targetVersion|string`: 目标版本，eg: '4.4.4'.

#return#

* `-1|int`: 当前版本比目标版本小
* `0|int`: 当前版本和目标版本一样
* `1|int`: 当前版本比目标版本大