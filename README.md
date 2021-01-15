```
$$\       $$\                                  $$\                                       
$$ |      \__|                                 $$ |                                      
$$ |      $$\ $$\    $$\  $$$$$$\   $$$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\  $$$$$$\$$$$\  
$$ |      $$ |\$$\  $$  |$$  __$$\ $$  _____|\_$$  _|  $$  __$$\ $$  __$$\ $$  _$$  _$$\ 
$$ |      $$ | \$$\$$  / $$$$$$$$ |\$$$$$$\    $$ |    $$ /  $$ |$$ |  \__|$$ / $$ / $$ |
$$ |      $$ |  \$$$  /  $$   ____| \____$$\   $$ |$$\ $$ |  $$ |$$ |      $$ | $$ | $$ |
$$$$$$$$\ $$ |   \$  /   \$$$$$$$\ $$$$$$$  |  \$$$$  |\$$$$$$  |$$ |      $$ | $$ | $$ |
\________|\__|    \_/     \_______|\_______/    \____/  \______/ \__|      \__| \__| \__|
                                                                                         
```

# Livestorm plugin API

This is a library that allows to build plugin on top of Livestorm

## Requirements

- NodeJS (any recent version >12 will do)
- npm
- yarn (this is optionnal but below commands use it)

## Getting started

First off, install the Livestorm plugin CLI : 

```
yarn add global git+ssh://git@github.com/livestorm/livestorm-plugin-cli.git
```

Then run :
```
livestorm create
```

This will guide through a few steps required to configure your plugin.

In general, since this is a regular npm package you have access to pretty standard npm commands that allow you to manage your dependencies and run your test suite.

```
yarn
yarn test
```

## Publishing

To publish your plugin, simply run : 
```
livestorm publish
```

This will publish your plugin based on the API key and version number you set in the `package.json`

