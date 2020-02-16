const multipleRecipes = (randomRecipes, type, setRecipes) => {
  const recipesArray = randomRecipes.map((recipe) => {
    if (type === 'meal') return recipe.meals[0];
    return recipe.drinks[0];
  });
  return setRecipes(recipesArray);
};

export const getRandomRecipes = async (type, number, setRecipes) => {
  const randomRecipes = [];
  for (let index = 0; index < number; index += 1) {
    const response = fetch(`https://www.the${type}db.com/api/json/v1/1/random.php`).then((data) => data.json());
    randomRecipes.push(response);
  }
  return multipleRecipes(await Promise.all(randomRecipes), type, setRecipes);
};

const getRecipes = async (type, endPoint) => {
  const response = await fetch(`https://www.the${type}db.com/api/json/v1/1/${endPoint}`);
  return response.json();
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

export const searchByCategory = (type, parameter) => {
  const endPoint = `filter.php?c=${parameter}`;
  return getRecipes(type, endPoint);
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

export const getRecipeCategories = async (type, setCategories) => {
  let categoriesList = await fetch(`https://www.the${type}db.com/api/json/v1/1/list.php?c=list`).then((data) => data.json());
  if (type === 'meal') categoriesList = categoriesList.meals;
  else categoriesList = categoriesList.drinks;

  const categories = categoriesList.filter((c, index) => index < 5).map((ctg) => ctg.strCategory);
  setCategories(categories);
};
