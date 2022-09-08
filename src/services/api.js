export async function getCategories() {
  const returnAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const returnAPIJson = await returnAPI.json();
  return returnAPIJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const returnAPI = await fetch(url);
  const returnAPIJson = await returnAPI.json();
  return returnAPIJson;
}

export async function getProductFromProductId(productId) {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const returnAPI = await fetch(url);
  const returnAPIJson = await returnAPI.json();
  return returnAPIJson;
}
