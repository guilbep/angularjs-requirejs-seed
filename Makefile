prod:
	sudo rm /var/www/experimental;	sudo ln -s `pwd`/build /var/www/experimental 
dev:
	sudo rm /var/www/experimental;	sudo ln -s `pwd` /var/www/experimental 
