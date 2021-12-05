# cm-signup-form

## 1. Data structure

For the first step I'm going to review the requirements and use that to come up with what will likely by my graphql schema for reading and writing from the db. I'm going to use Fauna to store the data with a graphql api, since thats what I'm most used to using and will be the easiest to set up.

Below is the rough graphql schema. I decided that the easiest way to maintain this will be to keep any of the dropdown options in the db rather than hard-coding them into to front-end. That will allow us to change the options in the future without requiring a code change. It also will mean there is a single source of truth for those dropdown options and there is no risk of having an option get presented on the front-end that isn't part of our actual model or business logic. Finally, it will make reporting the selected options easier, since we will query by a category id instead of a specific string match.

In order to prevent a duplicate form from being submitted, I'll create a query to get a portfolio by portfolio link. If the response is successful, I can infer that the portfolio link is already in use. That will be a lot more effecient than checking the given portfolio link against every existing portfolio link.

### Queries

```gql
getPortfolioByPortfolioLink(portfolioLink: string!) {
    Portfolio {
        id
    }
}

getCategories {
    Category {
        name
        id
    }
}

getQualityPerspectives {
    QualityPerspective {
        name
        id
    }
}

getExperienceLevels {
    ExperienceLevel {
        name
        id
    }
}

getBusinessUnderstandingLevels {
    BusinessUnderstandingLevel {
        name
        id
    }
}

```

### Mutations

```gql
submitPortfolio(
    firstName: string!
    lastName: string!
    categoryId: string!
    portfolioLink: string!
    hasOnlineStore: string!
    onlineStoreUrls: string
    qualityPerspectiveId: string!
    experienceLevelId: string!
    businessUnderstandingId: string!
) {
    status
}
```

### Fauna setup

In order for this app to work, a .env file with the fauna secret key and username have to be created. See .env.template for example (the .env file is not versioned for security)

## 2. React as the rendering layer

For convenience and saving time, I'm using `create-react-app` as a boilerplate for rendering/compiling. This takes away a lot of the configuration steps, but wouldn't be my optimal pick for a production app, since its much harder to optimize. My personal preference would be to build the app with next.js for the usefulness of server-side rendering, built-in routing, and the performance optimization features it comes bundled with.

## 3. Apollo.js for managing graphql and caching.

I'm using apollo to make the queries. I'm not familiar with any other graphql libraries, so the only alternative I would consider is writing the rest operations with a rest library like axios or ajax. Apollo is strongly preferred since it will make the queries much easier to write and the resulting code will be much easier to read and understand. It will require a little configuration up-front, but its worth it for the payoff. I can also use the Apollo Cache in combination with LocalStorage as a data store for if I need to do any app-wide state management (as opposed to Redux), but I don't think that will be necessary.

## 4. Project setup and quality-of-life tools.

I'm using esling, prettier, and vscode to make all the code formatting something I don't have to think about. For my eslint configuration, I'm using the react, google, and prettier eslint preconfigurations. I have personal preferences for code styled, but am not super opinionaned about any particular style-guide as long as all of the project conforms to the same standards. These are items that should never come up in code reviews.

## 5. Jest for unit testing

For testing I'm going to use jest. The tests won't strictly be "unit tests" as they may integrate various features to validate the requirements. I will use a TDD approach and write tests that validate the requirements for the story, then write the features to make the tests pass. As an additional note, this comes built-in with `create-react-app` so I won't have to do any setup.

## 6. Yarn for package management

Yarn > npm
