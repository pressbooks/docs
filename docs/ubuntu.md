---
title: Local Development on Ubuntu
permalink: /local-development/ubuntu/
---
Following these instructions will give you a local development network of Pressbooks based on [roots/bedrock][1] and [roots/trellis][2], with the following features:

* Unit testing via [PHPUnit][3]
* Code standards evaluation via [PHP_CodeSniffer][4]
* Build tools for plugin assets via [npm][5] and [webpack][6].

## 1. Dependencies

* Install Git: <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>
* Install PHP7.3: <https://askubuntu.com/a/1238983>
* Install Composer: <https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos>
* Install Node.js LTS with NPM: <https://nodejs.org/en/download/>
* Install Virtual Box: <https://www.virtualbox.org/>
* Install Vagrant: <https://www.vagrantup.com/>
* Install Ansible: <https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-specific-operating-systems>
  
Concise directions for installing VirtualBox, Vagrant, and Ansible are available [in the Trellis docs](https://roots.io/docs/getting-started/ubuntu-linux/#working-with-trellis).

## 2. Setup

Create a directory for your local development environment and `cd` there: 

`mkdir ~/Code/pressbooks-dev && cd ~/Code/pressbooks-dev`

Clone [pressbooks/trellis][9] into `~/Code/pressbooks-dev/trellis`:

`git clone git@github.com:pressbooks/trellis.git`

Clone [pressbooks/bedrock][10] or your preferred bedrock into `~/Code/pressbooks-dev/site`:

`git clone git@github.com:pressbooks/bedrock.git site`

If not already present, add [pressbooks/pressbooks][11], [pressbooks/pressbooks-aldine][12] and [the required themes][13] to your Bedrock dependencies (for more information on this strategy, [see this post][14]).

```
cd ~/Code/pressbooks-dev/site
composer require pressbooks/pressbooks:dev-dev
composer require pressbooks/pressbooks-aldine:dev-dev
composer require pressbooks/pressbooks-book:dev-dev
composer require pressbooks/pressbooks-clarke:dev-dev
composer require pressbooks/pressbooks-donham:dev-dev
composer require pressbooks/pressbooks-jacobs:dev-dev
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

It should work out-of-the-box. If you want to setup staging or production environments, you will need to update all instances of `example.com` and `pressbooks.test` in `~/Code/pressbooks-dev/trellis/group_vars/` to a consistent value. For more info, consult the [Trellis docs][15] as that is outside the scope of this tutorial.

## 4. Launch

Open the terminal. Change to the `~/Code/pressbooks-dev/trellis/` directory and run `vagrant up`:

```
cd %HOMEPATH%\\Code\\pressbooks-dev\\trellis
vagrant up
```

Fully provisioning your development environment may take up to 30 minutes.

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
cd /srv/www/example.com/current
bin/install-wp-tests.sh pressbooks_tests pressbooks_test '' 127.0.0.1 latest true
composer test
```

Coding standards in the VM:

```
vagrant ssh
cd /srv/www/example.com/current
composer standards
```

### Asset Building

We use [webpack][6] wrapped in [Laravel Mix][16] to build plugin assets (CSS and JavaScript) for Pressbooks.

1. At the command prompt from the Pressbooks plugin directory, e.g. `~/Code/pressbooks-dev/site/web/app/plugins/pressbooks`, run `npm install` to install build tools.
2. To lint your [Javascript](https://eslint.org) and [SCSS](https://stylelint.io) assets, run `npm run lint`.
3. Then, run `npm run build` or `npm run build:production` to build your plugin assets (`npm run build:production` will add a version hash to the asset manifest for browser cache busting).

### Updating Plugins & Themes

In [Git Bash][8]:

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
[8]: https://git-for-windows.github.io/
[9]: https://github.com/pressbooks/trellis/
[10]: https://github.com/pressbooks/bedrock/
[11]: https://github.com/pressbooks/pressbooks/
[12]: https://github.com/pressbooks/pressbooks-aldine/
[13]: https://github.com/pressbooks/pressbooks-book/
[14]: https://kizu514.com/blog/php-composer-for-developers/
[15]: https://roots.io/trellis/docs/windows/
[16]: https://github.com/JeffreyWay/laravel-mix
[17]: https://github.com/winnfsd/vagrant-winnfsd/issues/105
