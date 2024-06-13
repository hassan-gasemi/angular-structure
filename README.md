# angular-structure

## Deploy on http server
One important note about servig an SPA is all urls should be redirected to index.html.
code snippet to run the angular project after build with http-server:
```shell
http-server --gzip --proxy http://localhost:8080?
```

http-server: 
```npm i http-server```