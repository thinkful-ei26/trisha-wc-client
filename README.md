# [What's Cooking App](https://protected-depths-66567.herokuapp.com/)
[![Build Status](https://travis-ci.org/thinkful-ei26/trisha-wc-client.svg?branch=master)](https://travis-ci.org/thinkful-ei26/trisha-noteful-v4)
### Not sure what to cook for your next meal?

[What's Cooking](https://protected-depths-66567.herokuapp.com/) is a full-stack app that can help you. On page load, a user can:

- Browse through the recipe list for meal ideas
- Click on a recipe to see detailed instructions to make the dish.
- Click the "Surprise Me" button to generate a random recipe.
- Add a new recipe to the "What's Cooking?" app by clicking on the "+ Add Recipe" button

**Note:**
- A user does not need to login in order to use my app.
-  My app only needs to do a GET/FETCH & POST for it's MVP, but extension features will include multiple users with the ability to save recipes, create, edit, and delete recipes on their dashboard.

## QuickLinks
- [Deployed App](https://protected-depths-66567.herokuapp.com/)
- [Server Repo](https://github.com/thinkful-ei26/trisha-wc-server.git)
- [Client Repo](https://github.com/thinkful-ei26/trisha-wc-client.git)
- [Curriculum Link](https://courses.thinkful.com/dev-301v1/assignment/2.9.4)

## Revision Requirements (resolved)

:white_check_mark: **Valid markup**: Used Axe Chrome Exension to make sure that the App is a11y compatible & HTML is semantic (changed h3s to h2 tags)

:grey_exclamation: **headers** After talking to my mentor, Jarod Reid, and being wary of the feedback, I've decided to leave off the header when adding a new recipe. I didn't make any changes because the add new recipe form is supposed to look like a new generated page while allowing access to the recipe list if the user scrolls down the page. This way, users can refer to other recipes while they make add a new recipe to the list.  

:white_check_mark: Included **ARIA LIVE** tags on RecipeList & InfoModal components

:white_check_mark: **Mobile first-design:** Fixed UI issues on 320px screen. Polished user feedback on new recipe form, I've added margins and padding for buttons. I also made the fonts responsive. 

:white_check_mark: **Toggle Recipe** fixed. Users can click condense and detailed view for real.

:grey_exclamation: **`ref`** on RecipeForm is needed so that the search form is able to access the input text. If I leave it out, my component dies. 

:star: :star: :star: **React Router** When I submitted my first deployed version of the app, I was waiting to use React `Router` until I had enough time to code some of the POST MVP features like multi-user login and registration form. I ran this by my mentor, we agreed that since MVP features of my app is similar to a one-page application, we thought it didn't make sense to use React `Router` at that point. But, I added it in for you on the InfoModal, RecipeForm, and Surprise views so that the userflow is better and the endpoint makes sense whenever a user clicks on a different view. Hope this is okay. I realize this app is a work in progress. :smiley:

## MVP Requirements (completed)

:white_check_mark: A [description](#not-sure-what-to-cook) of your app

:white_check_mark: A link to a [deployed version](https://protected-depths-66567.herokuapp.com/)

:white_check_mark: [Screenshots of your app](https://gist.github.com/kronicle114/de740e8cebe42e6fa200b6303ab3f291)

- Please see [User Stories](#user-stories) for screenshots or this [gist](https://gist.github.com/kronicle114/de740e8cebe42e6fa200b6303ab3f291) 

:white_check_mark: A description of your tech stack
- **React** for the frontend
- **Redux** for state management
- **Node** for the backend
- **MongoDB** for the database

:white_check_mark: A brief description of where each of the key parts of the project live in your codebase

**CLIENT**
- **public:** contains `index.html`
- **src:** contains most of the dynamic UI files such as components, actions, reducers, and client side tests
<img src="https://sweettootsco.files.wordpress.com/2019/01/client.png" alt="condensed recipe view" width="200px" />

**SERVER**
- **db:** contains the recipe data used for test, development, & production
- **models:** contains recipe schema
- **public:** `index.html` for server side (for developement)
- **routes:** recipe routes & endpoints (basic CRUD)
- **test:** server tests
- **utils:** used to seed the database

<img src="https://sweettootsco.files.wordpress.com/2019/01/server.png" alt="condensed recipe view" width="200px" />

:white_check_mark: If your app is meant to be re-used by other developers, instructions on how to get the app up and running (see below)

## Instructions for Developers
In development, your local machine should have [Node.js](https://nodejs.org/en/) and [Mongo](https://www.mongodb.com/) set up

1. Clone both the server and client side of this app:
* [Server](https://github.com/thinkful-ei26/trisha-wc-server.git) or `git clone https://github.com/thinkful-ei26/trisha-wc-server.git`
* [Client](https://github.com/thinkful-ei26/trisha-wc-client.git) or `git clone https://github.com/thinkful-ei26/trisha-wc-client.git`
2. `npm install` the requirements on each of the repos
3. Run `mongod` in a separate terminal shell. 
4. Open a new terminal shell and then `cd` into the server side and run `node server.js`
5. Finally, `cd` into the client side and run `npm start` in a new terminal shell. A new browser window should open containing the app. 

## User Stories 

### MVP
:white_check_mark: **1. User can see a list of recipes when they first open the app.** 

All recipes in the list default to a "condensed" view showing only:
* recipe title
* image
* description

<img src="https://sweettootsco.files.wordpress.com/2019/01/on-load.png" alt="condensed recipe view" width="300px" />

:white_check_mark: **2. My app will find and import enough recipes for it to be useful.**
- Choice 1: Use an open source recipe API. I included three possible API links below ( just incase something bad happens), but my go to is [Spoonacular's recipe API](https://spoonacular.com/api/docs/recipes-api).
   - A. [Spoonacular's recipe API](https://spoonacular.com/api/docs/recipes-api)
   - B. [RapidAPI's Recipe API](https://rapidapi.com/webknox/api/recipe/details)
   - C. [Food2Fork](https://www.food2fork.com/about/api)
- Choice 2: Manually write my recipe list (at least 10)
- Choice 3: Do both choice 1 & 2

**Using mLab and Mongo for production database**

<img src="https://sweettootsco.files.wordpress.com/2019/01/screen-shot-2019-01-10-at-5.31.45-pm.png" alt="mlab database" width="80%" />

:white_check_mark: **3. User can click on “Surprise Me!” button and a random recipe will be generated.**

<img src="https://sweettootsco.files.wordpress.com/2019/01/surprise.png" alt="surprise btn" width="300px" />

:white_check_mark: **4. When a user clicks on a recipe they are taken to a display with "detailed" view.**

Detailed view expands to additionally display:**
* Ingredients
* Directions
* Number of servings
* Prep time
* Cooking time 

<img src="https://sweettootsco.files.wordpress.com/2019/01/screen-shot-2019-01-10-at-5.34.50-pm.png" alt="detailed recipe view" width="300px" />

:white_check_mark: **5. User can add a new recipe to the recipe list.** 

When a user clicks on "+ Add Recipe", they are taken to this create new recipe form.
* Recipe title
* Description
* Ingredients
* Image url
* Number of servings
* Prep time 
* Cook time

<img src="https://sweettootsco.files.wordpress.com/2019/01/form.png" alt="add recipe form" width="300px" />

:white_check_mark: **6. User will receive the appropriate error feedback when they cannot submit a new recipe.**

<img src="https://sweettootsco.files.wordpress.com/2019/01/screen-shot-2019-01-10-at-5.36.36-pm.png" alt="validation on add recipe form" width="300px" />

### :construction:  Post MVP :construction: 
- :white_check_mark: **Landing page:** On first visit, instructions containing how to use the app will render. Subsequent visits/reload will not render the first-time div, but you can click on "INFO" button to see the instructions again.**
- :white_check_mark: **User can click on "INFO" for instructions on how to use the app**
- :white_check_mark: **User can search a recipe using the search box**
- **User can filter the recipe list by the example categories below:**
    * Filter by:
    * Dairy-free
    * Vegetarian
    * Gluten-free
    * Slow Cooker
    * Under 30 Minutes
    * Freezer Friendly
    * Kid Friendly
- **User can filter the recipe list a by ingredients**
- **User can edit a recipe**
- **User can print the desired recipe**
- **User can bookmark a recipe**
- **Multiple users, who can have their own “playlist” of favorite recipes. When you hit surprise me, it’ll pull from your own recipe playlist**
- **Share button (FaceBook, E-mail, SMS)**
- **Upload a photo as opposed to a URL**
- **User can link other recipes and save it on their recipe playlist**

## Wireframes

### MVP

#### **Condensed recipe list on page load:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/page1.png" alt="Condensed recipe list on page load" width=400px />

#### **React components condensed view:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/Components.png" alt="Components condensed view" />

#### **What's Cooking App Info:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/Info.png" alt="What's Cooking App Info" width=400px />

#### **Recipe list detailed view:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/RecipeDetailed.png" alt="Recipe detailed view" width=400px/>

#### **Create a new recipe:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/NewRecipe.png" alt="Create a new recipe" />

### Post-MVP
After MVP, at minimum I want to be able to filter by category. It's the fate of lactose-intolerant people like me. 

#### **Filter by a category**

<img src="https://sweettootsco.files.wordpress.com/2018/12/Filter.png" alt="filter by category" width=400px />
