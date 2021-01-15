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

## Create your Livestorm plugin

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

## Start building

Once you have completed the above steps, you should be ready to start coding. 
Open you project folder and open the `index.ts` file.

This is entry point of your Livestorm plugin. This code is executed in a sandboxed Javascript environment which communicates directly to Livestorm via a standard iframe <> DOM communication.

```javascript
import Livestorm from '@livestorm/plugin'
/*
*
* The `Livestorm` object contains all of the exposed APIs that allow 
* you to act and build on top of Livestorm room
*
* Do not hesitate to console.log or use the autocompletion of your editor 
* to understand what is inside and what are the exposed APIs
*
*/


/*
*
* A simple Hello world example consists in publishing an event that everyone
* in the room is going to subscribe to
*
*/
Livestorm.PubSub.subscribe('hello', (payload) => {
  console.log('Someone said :', payload.message) 
  // Will print 'Hello world' in everybody's console
})

/*
*
* Then, once you have subscribed to the said event
* You will be able to publish it to all of the subscribers
* ie: everyone who is in the room will receive the message
*
*/
Livestorm.PubSub.publish('hello', { message: 'Hello world' })
```

## Publishing

Whenever you want to try your plugin or publish it for good, simply run : 
```
livestorm publish
```

This will publish your plugin based on the API key and version number you set in the `package.json`

