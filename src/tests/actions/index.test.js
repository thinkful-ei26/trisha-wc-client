import fetchRecipes, {
  SURPRISE_CLICK,
  surpriseClick,
  VIEW_ALL_RECIPES,
  allRecipes,
  TOGGLE_EXPAND,
  toggleExpand,
  FETCH_RECIPES_REQUEST,
  fetchRecipesRequest,
  FETCH_RECIPES_SUCCESS,
  fetchRecipesSuccess,
  FETCH_RECIPES_ERROR,
  fetchRecipesError,
} from '../../actions/index';

import { API_BASE_URL } from '../../config';

describe('supriseClick', () => {
  it('Should return the action', () => {
    const action = surpriseClick();
    expect(action.type).toEqual(SURPRISE_CLICK);
  })
})

describe('allRecipes', () => {
  it('Should return the action', () => {
    const action = allRecipes();
    expect(action.type).toEqual(VIEW_ALL_RECIPES);
  })
})

describe('toggleExpand', () => {
  it('Should return the action', () => {
    const id = '00001';
    const action = toggleExpand(id);
    expect(action.type).toEqual(TOGGLE_EXPAND);
    expect(action.id).toEqual(id);
  })
})

describe('fetchRecipesSuccess', () => {
  it('Should return the action', () => {
    const recipes = []
    const action = fetchRecipesSuccess(recipes);
    expect(action.type).toEqual(FETCH_RECIPES_SUCCESS);
    expect(action.recipes).toEqual(recipes);
  })
})

describe('fetchRecipesRequest', () => {
  it('Should return the action', () => {
    const action = fetchRecipesRequest();
    expect(action.type).toEqual(FETCH_RECIPES_REQUEST);
  })
})

describe('fetchRecipesError', () => {
  it('Should return the action', () => {
    const error = 'bacon ipsum error';
    const action = fetchRecipesError(error);
    expect(action.type).toEqual(FETCH_RECIPES_ERROR);
    expect(action.error).toEqual(error);
  })
})

/* === ASYNC ACTIONS TESTS === */

const recipes = [ 
  { ing: [ 'ing 1','ing 2','ing 3'],
    expanded: false,
    title: 'Recipe Title 1',
    desc: 'Bacon ipsum.',
    serving: '2',
    imgUrl:'https://sweettootsco.files.wordpress.com/2018/12/calzone.jpg',
    prep: '10 min',
    cook: '20 min',
    directions:'Bacon ipsum',
    id: '00001' 
  },
  { ing: [ 'ing 1','ing 2','ing 3'],
    expanded: false,
    title: 'Recipe Title 2',
    desc: 'Bacon ipsum.',
    serving: '2',
    imgUrl:'https://sweettootsco.files.wordpress.com/2018/12/calzone.jpg',
    prep: '10 min',
    cook: '20 min',
    directions:'Bacon ipsum',
    id: '00002' 
  },
];

describe('fetchRecipes', () => {
  it('Should dispatch fetchRecipesRequest', () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return recipes;
        }
      })
    );

    const dispatch = jest.fn();
    console.log(fetchRecipes);
    return fetchRecipes()(dispatch)
      .then(() => {
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      expect(dispatch).toHaveBeenCalledWith(fetchRecipesSuccess(recipes));
    });
  });

  it('Should dispatch fetchRecipeError on error', () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        "error": "error message"
      })
    );

    const dispatch = jest.fn();
    console.log(fetchRecipes);
    return fetchRecipes()(dispatch)
      .then(() => {
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      expect(dispatch).toHaveBeenCalledWith(fetchRecipesError({
        "error": "error message"
      }));
    });
  });

});