export const getIngredients = (ing) => {
  if (ing) {
    return Object.keys(ing.ingredient)
    .map(ingredientKey => {
      return [...Array(ing.ingredient[ingredientKey])].map(
        (ingredient) => {
          return <li key={ingredient}>
            <em>
            {ingredient}
            </em>
          </li> 
        }
      )
    }).reduce((arr, el) =>  arr.concat(el), [])
  } else {
    return null;
  }
}
