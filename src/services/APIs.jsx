const multipleRecipes = async (randomRecipes, type, setRecipes) => {
  let recipesArray = [];
  await Promise.all(randomRecipes)
    .then((recipes) => {
      recipes.forEach(({ meals, drinks }) => {
        if (type === 'explorar') {
          recipesArray.push(meals);
          recipesArray.push(drinks);
        } else if (type === 'receitas/comidas') {
          recipesArray.push(meals);
        } else {
          recipesArray.push(drinks);
        }
      });
      recipesArray = recipesArray.flat();
      const cleanArray = recipesArray.filter((recipe) => !!recipe === true);
      setRecipes(cleanArray);
      return localStorage.setItem('recipes', JSON.stringify(cleanArray));
    });
};

export const getRandomRecipes = (type, setRecipes) => {
  let kind = '';
  const randomRecipes = [];
  const recipesNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  recipesNumber.forEach(() => {
    const foodOrDrink = Math.floor(Math.random() * 2);
    if (foodOrDrink === 0) {
      kind = 'meal';
    } else {
      kind = 'cocktail';
    }
    const response = fetch(`https://www.the${kind}db.com/api/json/v1/1/random.php`)
      .then((data) => data.json());
    randomRecipes.push(response);
  });
  return multipleRecipes(randomRecipes, type, setRecipes);
};

export const getRecipeCategories = async (type, setCategories) => {
  const categoriesList = [];
  if (type === 'explorar') {
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((data) => data.json())
      .then((categories) => categoriesList.push(categories.drinks));
    await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((data) => data.json())
      .then((categories) => categoriesList.push(categories.meals));
  } else if (type === 'receitas/comidas') {
    await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((data) => data.json())
      .then((categories) => categoriesList.push(categories.meals));
  } else {
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((data) => data.json())
      .then((categories) => categoriesList.push(categories.drinks));
  }
  const categories = categoriesList.flat()
    .filter((c, index) => index < 11)
    .map(({ strCategory }) => strCategory);
  setCategories(categories);
};


const getRecipes = async (type, endPoint) => {
  const response = await fetch(`https://www.the${type}db.com/api/json/v1/1/${endPoint}`).then((data) => data.json());
  return response;
};

export const searchByName = (type, parameter) => {
  const endPoint = `search.php?s=${parameter}`;
  return getRecipes(type, endPoint);
};

export const searchByIngredient = (type, parameter) => {
  const endPoint = `filter.php?i=${parameter}`;
  return getRecipes(type, endPoint);
};

export const searchByFirstLetter = (type, parameter) => {
  const endPoint = `search.php?f=${parameter}`;
  return getRecipes(type, endPoint);
};

export const searchByCategory = async (type, parameter, setRecipesResults) => {
  let recipes = await fetch(`https://www.the${type}db.com/api/json/v1/1/filter.php?c=${parameter}`).then((data) => data.json());
  if (type === 'meal') recipes = recipes.meals;
  else recipes = recipes.drinks;
  return setRecipesResults(recipes);
};

export const searchById = async (type, id, setRecipeDetails, setRecipeRecommendation) => {
  let details = await fetch(`https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`).then((data) => data.json());
  if (type === 'meal') {
    getRandomRecipes('cocktail', 6, setRecipeRecommendation);
    details = details.meals;
  } else {
    getRandomRecipes('meal', 6, setRecipeRecommendation);
    details = details.drinks;
  }
  return setRecipeDetails(details[0]);
};

export const getIngredientImage = (type, endPoint) => {
  const src = `https://www.the${type}db.com/images/ingredients/${endPoint}`;
  return src;
};

export const getRecipeImage = (type, endPoint) => {
  const recipeType = (type === 'meal') ? 'meals' : 'drink';
  const src = `https://www.the${type}db.com/images/media/${recipeType}/${endPoint}/preview`;
  return src;
};
