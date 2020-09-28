# The ForestPi v2 Project

### setup raspberry pi
```
sudo raspi-config
```

- 4 Localisation Options => Timezone => Asia/Bangkok
- 5 Interfacing Options => I2C => Yes

### install rtc ds1307 breakout and add dtoverlay to config.txt
```
sudo nano /boot/config.txt
.
.
dtoverlay=i2c-rtc,ds1307
```

sudo reboot

### remove fake-hwclock and update rtc date/time
sudo apt -y remove fake-hwclock  
sudo update-rc.d -f fake-hwclock remove  
sudo systemctl disable fake-hwclock

sudo hwclock -w

### install command
```
sudo apt update && sudo apt -y install git && cd ~ && rm -rf theforestpi-v2 && git clone https://github.com/TheForestPi/theforestpi-v2 && cd theforestpi-v2 && make && cd ~
```

### edit configurations
```
nano /home/pi/theforestpi-v2/config.json
```

### restart service
```
pm2 restart tfp-v2
```
