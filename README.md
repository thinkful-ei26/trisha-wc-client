# What's Cooking App
Not sure what to cook for your next meal? What's Cooking is a full-stack app that can help you narrow down your choices. On page load, a user can see a list of recipes. They can click on a recipe to see the necessary information to make the desired dish. A user can also click the "surprise me" button to generate a random recipe. In addition, a user can add a new recipe to the "What's Cooking?" app database. A user does not need to login in order to use my app.

## Requirements
- [Curriculum Link](https://courses.thinkful.com/dev-301v1/assignment/2.9.4)
- In development, your local machine should have [Node.js](https://nodejs.org/en/) and [Mongo](https://www.mongodb.com/) set-up

## Instructions (development)
1. Clone both the server and client side of this app:
* [Server](https://github.com/thinkful-ei26/trisha-wc-server.git) or `git clone https://github.com/thinkful-ei26/trisha-wc-server.git`
* [Client](https://github.com/thinkful-ei26/trisha-wc-client.git) or `git clone https://github.com/thinkful-ei26/trisha-wc-client.git`
2. `npm install` the requirements on each of the repos
3. Run `mongod` in a separate terminal shell. 
4. Then `cd` into the server side and run `node server.js`
5. Finally, `cd` into the client side and run `npm start`. A new browser window should open containing the app. 

## User Stories 
What can my app do?

### MVP
**1. User can see a list of recipes when they first open the app.** 
All recipes in the list default to a "condensed" view showing only:
* recipe title
* image
* description

**2. My app will find and import enough recipes for it to be useful**
- Choice 1: Use an open source recipe API. I included three possible API links below ( just incase something bad happens), but my go to is [Spoonacular's recipe API](https://spoonacular.com/api/docs/recipes-api).
   - A. [Spoonacular's recipe API](https://spoonacular.com/api/docs/recipes-api)
   - B. [RapidAPI's Recipe API](https://rapidapi.com/webknox/api/recipe/details)
   - C. [Food2Fork](https://www.food2fork.com/about/api)
- Choice 2: Manually write my recipe list (at least 10)
- Choice 3: Do both choice 1 & 2

**3. User can click on “Surprise Me!” button and a random recipe will be generated.**

**4. When a user clicks on a recipe they are taken to a display with "detailed" view.
Detailed view expands to additionally display:**
* Ingredients
* Directions
* Number of servings
* Prep time
* Cooking time 

**5. User can add a new recipe to the recipe list** 
When a user clicks on "+ New Recipe", they are taken to this create new recipe form.
* Recipe title
* Description
* Ingredients
* Image url
* Number of servings
* Prep time 
* Cook time

**6. User will receive the appropriate error feedback when they cannot submit a new recipe.**

### Post MVP
- **User can click on "INFO" for instructions on how to use the app**
- **User can search a recipe using the search box**
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

<img src="https://sweettootsco.files.wordpress.com/2018/12/page1.png" alt="Condensed recipe list on page load" width=500px />

#### **React components condensed view:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/Components.png" alt="Components condensed view" />

#### **What's Cooking App Info:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/Info.png" alt="What's Cooking App Info" width=500px />

#### **Recipe list detailed view:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/RecipeDetailed.png" alt="Recipe detailed view" width=500px/>

#### **Create a new recipe:**

<img src="https://sweettootsco.files.wordpress.com/2018/12/NewRecipe.png" alt="Create a new recipe" />

### Post-MVP
After MVP, at minimum I want to be able to filter by category. It's the fate of lactose-intolerant people like me. 

#### **Filter by a category**

<img src="https://sweettootsco.files.wordpress.com/2018/12/Filter.png" alt="filter by category" width=500px />
