all:
	### prerequisites
	sudo apt update
	sudo apt -y install gcc g++ make bzip2 bison flex automake libtool gawk build-essential ncurses-dev curl lynx libreadline6-dev zlib1g-dev unzip subversion git cmake pkg-config axel tree minicom sleepenh texinfo gettext lzop u-boot-tools libssl-dev mpg123 i2c-tools

	### install nodejs
	curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
	sudo apt install nodejs

	### install pm2
	sudo npm install -g pm2
	pm2 startup || true
	sudo env PATH=$(PATH):/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi

	### remove previous tfp-v2 if has been installed
	if [ "`pm2 pid tfp-v2`" != "" ]; then pm2 delete tfp-v2 || true;pm2 save --force || true; fi

	### pm2 start tfp-v2
	pm2 start /home/pi/theforestpi-v2/tfp-v2.js && pm2 save

	### finalize
	@echo "edit config.json and reboot =>"
	@echo "1) nano /home/pi/theforestpi-v2/config.json"
	@echo "2) pm2 restart tfp-v2"
