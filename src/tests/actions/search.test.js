import {
  SEARCH_RECIPES_REQUEST,
  searchRecipesRequest,
  SEARCH_RECIPES_SUCCESS,
  searchRecipesSuccess,
  SEARCH_RECIPES_ERROR,
  searchRecipesError,
  // search,
  // searchRecipes
} from '../../actions/search';

// import { API_BASE_URL } from '../../config';

describe('searchRecipesSuccess', () => {
  it('Should return the action', () => {
    const recipes = []
    const action = searchRecipesSuccess(recipes);
    expect(action.type).toEqual(SEARCH_RECIPES_SUCCESS);
    expect(action.recipes).toEqual(recipes);
  })
})

describe('searchRecipesRequest', () => {
  it('Should return the action', () => {
    const action = searchRecipesRequest();
    expect(action.type).toEqual(SEARCH_RECIPES_REQUEST);
  })
})

describe('searchRecipesError', () => {
  it('Should return the action', () => {
    const error = 'bacon ipsum error';
    const action = searchRecipesError(error);
    expect(action.type).toEqual(SEARCH_RECIPES_ERROR);
    expect(action.error).toEqual(error);
  })
})

/* === ASYNC ACTIONS TESTS === */

// const recipes = [ 
//   { ing: [ 'ing 1','ing 2','ing 3'],
//     expanded: false,
//     title: 'Recipe Title 1',
//     desc: 'Bacon ipsum.',
//     serving: '2',
//     imgUrl:'https://sweettootsco.files.wordpress.com/2018/12/calzone.jpg',
//     prep: '10 min',
//     cook: '20 min',
//     directions:'Bacon ipsum',
//     id: '00001' 
//   },
//   { ing: [ 'ing 1','ing 2','ing 3'],
//     expanded: false,
//     title: 'Recipe Title 2',
//     desc: 'Bacon ipsum.',
//     serving: '2',
//     imgUrl:'https://sweettootsco.files.wordpress.com/2018/12/calzone.jpg',
//     prep: '10 min',
//     cook: '20 min',
//     directions:'Bacon ipsum',
//     id: '00002' 
//   },
// ];

// describe('searchRecipes', () => {
//   it('Should dispatch fetchRecipesRequest', () => {
//     global.fetch = jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true,
//         json() {
//           return recipes;
//         }
//       })
//     );

//     const dispatch = jest.fn();
//     const term = 'Recipe'
//     // console.log('search:',search);
//     // console.log('searchRecipes:',searchRecipes);
//     return searchRecipes('Recipe')(dispatch)
//       .then(() => {
//         expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes/?search=${term}`)
//       expect(dispatch).toHaveBeenCalledWith(searchRecipesSuccess(recipes));
//     });
//   });


// });