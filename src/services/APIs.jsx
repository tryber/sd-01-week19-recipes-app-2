const multipleRecipes = async (recipesResults, type) => {
  let recipesArray = [];
  await Promise.all(recipesResults)
    .then((recipes) => {
      recipes.forEach(({ meals, drinks }) => {
        if (type === 'meal') {
          recipesArray.push(meals);
        } else {
          recipesArray.push(drinks);
        }
      });
    });
  recipesArray = recipesArray.flat();
  const flattenedArray = recipesArray.filter((recipe) => !!recipe === true);
  return flattenedArray;
  // return localStorage.setItem('recipes', JSON.stringify(cleanArray));
};

export const getRandomRecipes = (type) => {
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
  return multipleRecipes(randomRecipes, type);
};


export const searchByEndpoint = async (type, parameter, setRecipesResults, searchType) => {
  const recipesResults = [];
  const endpoints = {
    ingredients: `https://www.the${type}db.com/api/json/v1/1/filter.php?i=${parameter}`,
    name: `https://www.the${type}db.com/api/json/v1/1/search.php?s=${parameter}`,
    firstLetter: `https://www.the${type}db.com/api/json/v1/1/search.php?f=${parameter}`,
  };

  const recipes = await fetch(endpoints[searchType])
    .then((data) => data.text())
    .then((text) => {
      if (text.length) return JSON.parse(text);
      return alert('Sua busca não retornou nenhum resultado.');
    });
  if (recipes !== undefined) {
    recipesResults.push(recipes);
    return multipleRecipes(recipesResults, type, setRecipesResults);
  }
  return null;
};

export const getRecipeCategories = async (type) => {
  const categoriesList = [];
  if (type === 'meal') {
    await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((data) => data.json())
      .then((categories) => categoriesList.push(categories.meals));
  } else {
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((data) => data.json())
      .then((categories) => categoriesList.push(categories.drinks));
  }
  const categories = categoriesList.flat()
    .filter((c, index) => index < 5)
    .map(({ strCategory }) => strCategory);
  return categories;
};

export const searchById = async (type, id, setRecipeRecommendation) => {
  let details = await fetch(`https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`).then((data) => data.json());
  if (type === 'meal') {
    details = details.meals;
    setRecipeRecommendation(getRandomRecipes('cocktail', 6));
  } else {
    details = details.drinks;
    setRecipeRecommendation(getRandomRecipes('meal', 6));
  }
  return details[0];
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
