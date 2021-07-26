## Contributing to Livestorm Plugin

#### **How to run the E2E tests before pushing your contribution?**

You are contributing and you want to run the E2E tests before pushing your commit? You have only have to follow theses configuration steps:

1. Create the file `cypress.env.json` and specify your Livestorm credentials

    ```json
    {

        "TEAM_MEMBER_EMAIL": "The email of a team member of your organization",
        "TEAM_MEMBER_PASSWORD": "The password of the latter",
        "EVENT_ID": "The test event ID (Create one, publish it then get the ID from the URL)"
    }
    ```

2. Create the file `cypress/fixtures/plugin/environments.json` and specify your plugin organization settings

    ```json
    {

        "development": {

            "apiKey": "The API Key generated on your organization",

            "name": "A unique name for the plugin published to your organization",

            "endpoint": "http://plugins.livestorm.co"

         }
    }
    ```

3. Launch the E2E tests runner

    `yarn run e2e:run:local`
 
