---
title: Local Development on macOS
permalink: /local-development/macos/
---
Following these instructions will give you a local development network of Pressbooks based on [roots/bedrock][1] and [roots/trellis][2], with the following features:

* Unit testing via [PHPUnit][3]
* Code standards evaluation via [PHP_CodeSniffer][4]
* Build tools for plugin assets via [npm][5] and [webpack][6].

## 1. Dependencies

Install [Homebrew][7]:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Install [Homebrew Cask][8]:

`brew tap caskroom/cask`

Install the version of [Ansible][9] in [requirements.txt](https://github.com/pressbooks/trellis/blob/master/requirements.txt) (currently 2.7.12, 2.8 is not supported):

`pip install ansible==2.7.12` (or `pip install -r requirements.txt`)

Install [Virtualbox][10]:

`brew cask install virtualbox`

Install [Vagrant][11]:

`brew cask install vagrant`

Install [vagrant-bindfs][12]:

`vagrant plugin install vagrant-bindfs`

Install [vagrant-hostmanager][13]:

`vagrant plugin install vagrant-hostmanager`

Install [Composer][14]:

`brew install composer`

Install [Node][15] with NPM:

`brew install node`

## 2. Setup

Create a directory for your local development environment and `cd` there:

`mkdir ~/Code/pressbooks-dev && cd ~/Code/pressbooks-dev`

Clone [pressbooks/trellis][16] into `~/Code/pressbooks-dev/trellis`:

`git clone git@github.com:pressbooks/trellis.git`

Clone [pressbooks/bedrock][17] or your preferred bedrock into  `~/Code/pressbooks-dev/site`:

`git clone git@github.com:pressbooks/bedrock.git site`

The generic Pressbooks bedrock already includes [pressbooks/pressbooks][18], [pressbooks/pressbooks-aldine][19] and [the required themes][20] as Composer dependencies. If you would like to add additional plugins or themes to your local development environment, add them to your Bedrock with `composer require` commands  (for more information on this strategy, [see this post][21]). The commands needed to add the Pressbooks SAML SSO plugin, for example, are shown below:

```
cd ~/Code/pressbooks-dev/site
composer require pressbooks/pressbooks-saml-sso:dev-dev
```

## 3. Configuration

The file `~/Code/pressbooks-dev/trellis/group_vars/development/wordpress_sites.yml` reflects your desired local development site URL. It looks like:

```
wordpress_sites:
  pressbooks.test:
    site_hosts:
      - canonical: pressbooks.test
        redirects:
          - www.pressbooks.test
    local_path: ../site # path targeting local Bedrock site directory (relative to Ansible root)
    admin_email: ops@pressbooks.test
    multisite:
      enabled: true
      subdomains: false
    ssl:
      enabled: true
      provider: self-signed
    cache:
      enabled: false
```

It should work out-of-the-box. If you want to setup staging or production environments, you will need to update all instances of `example.com` and `pressbooks.test` in `~/Code/pressbooks-dev/trellis/group_vars/` to a consistent value. For more info, consult the [Trellis docs][22] as that is outside the scope of this tutorial.

## 4. Launch

Change to the `~/Code/pressbooks-dev/trellis/` directory and run `vagrant up`:

`cd ~/Code/pressbooks-dev/trellis/ && vagrant up`

You will be required to enter your macOS password at a certain point in the process. Fully provisioning your development environment may take up to 30 minutes.

## 5. Development Tools

### Login:

The default Pressbooks username:password is `admin:admin`

### Logs:

Access and error logs are located on the VM in following directory:

`/srv/www/example.com/logs/`

### Unit Testing and Coding Standards

Unit testing in the VM:

```
vagrant ssh
cd /srv/www/example.com/current/web/app/plugins/pressbooks
bin/install-wp-tests.sh pressbooks_tests pressbooks_test '' 127.0.0.1 latest true
composer test
```

Coding standards in the VM:

```
vagrant ssh
cd /srv/www/example.com/current
composer standards
```

### Asset Linting & Building

We use [webpack][6] wrapped in [Laravel Mix][23] to build plugin assets (CSS and JavaScript) for Pressbooks.

1. At the command prompt from the Pressbooks plugin directory, e.g. `~/Code/pressbooks-dev/site/web/app/plugins/pressbooks`, run `npm install --no-save pressbooks-build-tools` to install build tools.
2. To lint your [Javascript](https://eslint.org) and [SCSS](https://stylelint.io) assets, run `npm run lint`.
3. Then, run `npm run build` or `npm run build:production` to build your plugin assets (`npm run build:production` will add a version hash to the asset manifest for browser cache busting).

### Updating Plugins & Themes

```
cd ~/Code/pressbooks-dev/site
composer update pressbooks/pressbooks --with-dependencies
composer update pressbooks/pressbooks-aldine --with-dependencies
composer update pressbooks/pressbooks-book --with-dependencies
```

### Updating Trellis & Bedrock

To update Trellis, it's best to rename the `origin` remote to `upstream` and check out the `upstream` master branch as a new branch called upstream:

```
~/Code/pressbooks-dev/trellis
git remote rename origin upstream
git checkout -b upstream upstream/master
```

Then any time you wish to update Trellis, you can run the following commands:

```
git checkout upstream && git pull
git checkout master
git merge upstream
```

Then commit the merge.

For Bedrock, follow the same process:

```
~/Code/pressbooks-dev/site
git remote rename origin upstream
git checkout -b upstream upstream/master
```

Then any time you wish to update Bedrock, you can run the following commands:

```
git checkout upstream && git pull
git checkout master
git merge upstream
```

Then commit the merge. You may need to regenerate your composer.lock file before you can commit, as there will often be merge conflicts.

[1]: https://roots.io/bedrock
[2]: https://roots.io/trellis
[3]: https://phpunit.de
[4]: https://github.com/squizlabs/PHP_CodeSniffer
[5]: https://www.npmjs.com/
[6]: https://webpack.github.io
[7]: http://brew.sh
[8]: https://caskroom.github.io
[9]: https://www.ansible.com/
[10]: https://www.virtualbox.org/
[11]: https://www.vagrantup.com/
[12]: https://github.com/gael-ian/vagrant-bindfs
[13]: https://github.com/devopsgroup-io/vagrant-hostmanager
[14]: https://getcomposer.org
[15]: https://nodejs.org
[16]: https://github.com/pressbooks/trellis/
[17]: https://github.com/pressbooks/bedrock/
[18]: https://github.com/pressbooks/pressbooks/
[19]: https://github.com/pressbooks/pressbooks-aldine/
[20]: https://github.com/pressbooks/pressbooks-book/
[21]: http://kizu514.com/blog/php-composer-for-developers/
[22]: https://roots.io/docs/trellis/master/wordpress-sites/
[23]: https://github.com/JeffreyWay/laravel-mix