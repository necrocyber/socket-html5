# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure(2) do |config|
  config.vm.box = "debian/jessie64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "htdocs", "/var/www/html"
  config.vm.provision "shell", inline: <<-SHELL
   apt-get update
   apt-get install -y g++
   curl -sL https://deb.nodesource.com/setup_0.12 | sh
   apt-get install -y nodejs
   npm install -g express
   npm install -g bower
   npm install -g stylus
   npm install -g grunt
   npm install -g grunt-cli
   npm install -g forever
   npm install -g nodemon
 SHELL
end
