# KITSI-Stat

Old time init.d control of Node.js server. Example app.js is included and controlled from "kitsistat". Make a copy of "kitsistat" and rename after your own app. Change the variables DIR, APP, and CMD in the beginning to point to your Node.js app.

```sh
/Users/steen/kitsi-stat/$ ./kitsistat start
./kitsistat started on 52777
/Users/steen/kitsi-stat/$ ./kitsistat status
{
  "title": "kitsi-stat",
  "version": "1.0.0",
  "timestamp": "2015-06-19T09:04:45.490Z",
  "args": [
    "/usr/local/bin/node",
    "/Users/steen/kitsi-stat/app.js"
  ],
  "uid": 501,
  "cwd": "/Users/steen/kitsi-stat",
  "memory": {
    "rss": 20946944,
    "heapTotal": 10783744,
    "heapUsed": 4679296
  },
  "pid": 52777,
  "uptime": 4.013
}
/Users/steen/kitsi-stat/$ curl http://127.0.0.1:3031
{
  "title": "kitsi-stat",
  "version": "1.0.0",
  "timestamp": "2015-06-19T09:04:51.464Z",
  "args": [
    "/usr/local/bin/node",
    "/Users/steen/kitsi-stat/app.js"
  ],
  "uid": 501,
  "cwd": "/Users/steen/kitsi-stat",
  "memory": {
    "rss": 21168128,
    "heapTotal": 11803648,
    "heapUsed": 4947024
  },
  "pid": 52777,
  "uptime": 9.987
}/Users/steen/kitsi-stat/$ ./kitsistat stop
Application stopped
/Users/steen/kitsi-stat/$ ./kitsistat status
Application is not running
```
