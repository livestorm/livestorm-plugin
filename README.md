
<img src="https://raw.githubusercontent.com/livestorm/livestorm-plugin-cli/master/src/assets/sdk-header.png" width="500px">

<img src="https://github.com/livestorm/livestorm-plugin/actions/workflows/ci.yml/badge.svg">

### Livestorm Plugins

Take your events to the next level with Livestorm plugins, a powerful SDK designed to let you build amazing experiences, on top of a platform you already love.

Our APIs make it easy to create complex live interactions. Messaging, websockets, WebRTC, let us worry about complex stuff, focus on the plugin experience.
Plugins is the best way to create powerful live integrations and interactions with 3rd party services you already use.

Check out our [getting started Guide](https://developers.livestorm.co/docs/getting-started-with-plugins-sdk/) and our [offical video course](https://fast.wistia.net/embed/channel/azooxwj070).


### You need a hand or want to contribute?

We are here to help, feel free to drop an issue to our [Github repo](https://github.com/livestorm/livestorm-plugin), or to contact us directly at [plugins@livestorm.co](mailto:plugins@livestorm.co) 

### How to run E2E tests

You are contributing and you want to run the E2E tests before pushing your commit ?You have only have to make the followings steps:
1. Set your Livestorm credentials in a cypress.env.json file

    ```json
    {

        "TEAM_MEMBER_EMAIL": "email@livestorm.co", // The email of a team member of your organization

        "TEAM_MEMBER_PASSWORD": "password" // The password of the latter
    }
    ```


2. Set your plugin organization settings in a plugin/environments.json

    ```json
    {

        "development": {

            "apiKey": "${apiKey}", // The API Key generated on your organization

            "name": "plugin-name", // The unique name of the plugin published to your organization

            "endpoint": "http://plugins.livestorm.co"

         }
    }
    ```
3. Launch the Cypress tests runner

    `yarn run cy:run:local`
 