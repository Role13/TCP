# Primer Servidor TCP

Práctica del primer servidor TCP


### Prerequisites

Tener node.js instalado

### Installing

======= Alpine Linux =======

Node.js LTS and npm packages are available in the Main Repository.

```
apk add nodejs npm
```

Node.js Current can be installed from the Community Repository.

```
apk add nodejs-current
```

======= Arch Linux =======

Node.js and npm packages are available in the Community Repository.

```
pacman -S nodejs npm
```

======= CentOS, Fedora and Red Hat Enterprise Linux =======

Node.js is available as a module called nodejs in CentOS/RHEL 8 and Fedora.

```
dnf module install nodejs:<stream>
```

where <stream> corresponds to the major version of Node.js. To see a list of available streams:

```
dnf module list nodejs
```

Para mas información de como instalar node.js

```
https://nodejs.org/en/download/package-manager
```

## Authors

* **Erika Rodríguez** - [Role13](https://github.com/Role13)