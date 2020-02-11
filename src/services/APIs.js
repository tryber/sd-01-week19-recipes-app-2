const getRecipes = async (type, endPoint) => {
  const response = await fetch(`https://www.the${type}db.com/api/json/v1/1/${endPoint}`);
  return response.json();
};

export const getRandomRecipes = async (type, number) => {
  const randomRecipes = [];
  for (let index = 0; index < number; index++) {
    const response = await fetch(`https://www.the${type}db.com/api/json/v1/1/random.php`).then((data) => data.json());
    let recipe;
    if (type === 'meal') recipe = response.meals[0];
    else recipe = response.drinks[0];
    randomRecipes.push(recipe);
  }
  return randomRecipes;
}

export const getIngredientImage = async (type, endPoint) => {
  const src = `https://www.the${type}db.com/images/ingredients/${endPoint}`;
  return src;
};

export const getRecipeImage = async (type, endPoint) => {
  const src = await fetch(`https://www.the${type}db.com/images/media/meals/${endPoint}/preview`);
  return src;
};

export const searchByName = (type, parameter) => {
  const endPoint = `search.php?s=${parameter}`;
  return getRecipes(type, endPoint);
}

export const searchByIngredient = (type, parameter) => {
  const endPoint = `filter.php?i=${parameter}`;
  return getRecipes(type, endPoint);
}

export const searchByFirstLetter = (type, parameter) => {
  const endPoint = `search.php?f=${parameter}`;
  return getRecipes(type, endPoint);
}
