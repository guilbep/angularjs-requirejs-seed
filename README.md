angular-requirejs-seed
======================

My angularjs-requirejs seed using bower not testing framework for now. Simple as it can be.

Your nginx conf make look like this after a make dev or make prod (don't forget do to a grunt dev or prod not finished yet)
```
   server {
	listen 		80;
	server_name	experimental.com;

	root /var/www/experimental/;
        location / {
            try_files $uri/ $uri /index.html;
        }


    }
```

