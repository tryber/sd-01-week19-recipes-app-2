const multipleRecipes = (randomRecipes, type) => {
  const recipesArray = randomRecipes.map((recipe) => {
    if (type === 'meal') return recipe = recipe.meals[0];
    else return recipe = recipe.drinks[0];
  });
  return recipesArray;
}

export const getRandomRecipes = async (type, number) => {
  const randomRecipes = [];
  for (let index = 0; index < number; index += 1) {
    const response = fetch(`https://www.the${type}db.com/api/json/v1/1/random.php`).then((data) => data.json());
    randomRecipes.push(response);
  }
  return multipleRecipes(await Promise.all(randomRecipes, type));
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

export const getIngredientImage = async (type, endPoint) => {
  const src = `https://www.the${type}db.com/images/ingredients/${endPoint}`;
  return src;
};

export const getRecipeImage = async (type, endPoint) => {
  const src = await fetch(`https://www.the${type}db.com/images/media/meals/${endPoint}/preview`);
  return src;
};
