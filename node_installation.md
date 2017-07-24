# Node.js installation
## On ubuntu machine
### Prerequisites

- A ubuntu machine with root privileges and internet.

### Install the Distro-Stable Version for Ubuntu
Ubuntu 16.04 contains a version of Node.js in its default repositories that can be used to easily provide a consistent experience across multiple systems. At the time of writing, the version in the repositories is v4.2.6. This will not be the latest version, but it should be quite stable, and should be sufficient for quick experimentation with the language.

In order to get this version, we just have to use the `apt` package manager. We should refresh our local package index first, and then install from the repositories.

```bash
sudo apt-get update
sudo apt-get install nodejs
```
If the package in the repositories suits your needs, this is all that you need to do to get set up with Node.js. In most cases, you'll also want to also install `npm`, which is the Node.js package manager. You can do this by typing:
```bash
sudo apt-get install npm
```

## On Windows machine

### Prerequisites
- A windows machine with internet and admin privileges.

### Install by downloading from [Node.js®](https://nodejs.org/en/download/) website
- go to node js [download page](https://nodejs.org/en/download/).
- select the windows installer based on the architecture(32bit or 64bit).
- After finishing of download, start installation during installation make sure that the add to path is included .
- restart the system.
- now you can use node in terminal.
- test it by opening the terminal, and type `node -v`.
