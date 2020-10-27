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

### สรุปการใช้งาน
1) ใช้ Dropbox Account เดียว โดยสร้าง Access Token แบบถาวร (No expiration) แล้วเอา Access Token ที่ได้มากรอกในไฟล์ config.json สร้างจากเว็บ =>
```
https://www.dropbox.com/developers/apps
```
2) Upload เพลงไปใส่เอาไว้ใน Dropbox เก็บไว้ที่โฟลเดอร์ songs
3) สร้างไฟล์ playlist เก็บไว้ใน Dropbox เก็บไว้ที่โฟลเดอร์ playlist
4) แก้ไขตารางเปิดเพลงใน Dropbox ไฟล์ config/schedule.json
5) คำสั่งในแต่ละ schedule
	- command => play หรือ stop
	- option => ใส่ชื่อไฟล์ playlist ที่ต้องการให้เล่น (play)
	- from => เวลาเริ่มใช้ตารางเวลานี้
	- to => เวลาหยุดใช้ตารางเวลานี้
	- invert => false คิดเวลาจาก from ไปยัง to, true ไม่เอาช่วงเวลาจาก from ไปยัง to
6) schedule ปกติ ให้แก้ไขไฟล์ schedule.json ใน Dropbox ในหัวข้อ list
7) schedule เฉพาะบอร์ด ให้ตั้งหัวข้อในไฟล์ schedule.json เป็น mac address ในรูปแบบ xx-xx-xx-xx-xx-xx (ใช้ตัวอักษรเล็ก)
8) เวลาแต่ละบอร์ดเล่นเพลง ดูรายการเล่นเพลงย้อนหลังได้ใน Dropbox ไฟล์ xx-xx-xx-xx-xx-xx_playing.log (xx-xx-xx-xx-xx-xx คือ mac address)
