# cm-signup-form


## 1. DB stuff

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