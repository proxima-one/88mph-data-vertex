


# Making a decentralized Infura


## Motivation
```
TODO
```

## Installation

In order to begin this we will need to install Ora and its dependencies.

### Installing Node.js
If you already have npm skip this step. Otherwise you can install node through the follow website: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


### Installing Ora
Once npm is installed, the package can be installed through the command-line:

```
npm install 'ora'
```


## Set-up

Now that is done let's create a new project directory and try out the commands for Ora.

```
mkdir ora-app && cd ora-app
```

## Ora Command Line Interface

Once inside our project folder we can try out the Ora CLI:

### Version
```
ora -v
```

### Help

```
ora -h
```

### Init

```
ora init
```

### Start
```
ora start
```

### Stop
```
ora stop
```

### Info
```
ora info
```

### Peers
```
ora peers
```

## Monitoring

We can also monitor an Ora node's network by inputting the following command:

```
ora dashboard
```

This will send information on the connections and services to your localhost. Generating a dashboard that should look something like this:

```
TODO Dashboard
```


## Using Ora in an Application
An Ora node can be used to setup an application. Through Ora, it is possible to integrate.









## Next Steps

- Service Creation

- Service Discovery

- Integration of plugins

