install:
	sudo npm install -g grunt-cli
	sudo npm install -g bower
	npm install
	bower install

prod:
	sudo rm /var/www/experimental;	sudo ln -s `pwd`/build /var/www/experimental; grunt prod 
dev:
	sudo rm /var/www/experimental;	sudo ln -s `pwd` /var/www/experimental; grunt dev
hooks:
	ln -s hooks/pre-commit .git/hooks/pre-commit
