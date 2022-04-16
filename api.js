/**
 * Use the functions exported from this module as your "API" from which you
 * retrieve the data to display on the page. Do not modify this file.
 */

/**
 * Sleep for a given number of milliseconds.
 *
 * @param {number} delayInMilliseconds
 * @returns {Promise<void>}
 */
function wait(delayInMilliseconds) {
  return new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
}

/**
 * Generate a pseudo-random integer.
 *
 * @param {number} max
 * @returns {number}
 */
function randomInteger(max) {
  return Math.floor(Math.random() * max);
}

const sampleProducts = [
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0be",
    title:
      "Twin Ball Bearing Door Hinge - 75 x 50 x 2mm - Satin Stainless Steel - Pair",
    productType: "ball bearing",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/417504.jpg",
    price: 2.91,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0bf",
    title: "Twin Ball Bearing Door Hinge - 75 x 50 x 2mm - Black - Pair",
    productType: "ball bearing",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/756337.jpg",
    price: 4.51,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0bg",
    title:
      "Performance Ball Bearing Door Hinge - 100 x 75 x 3mm - Polished Brass - Pair",
    productType: "ball bearing",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/135091.jpg",
    price: 10.6,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0ba",
    title: "Altro Concealed Hinge - 45 x 13mm - Satin Chrome - Pair",
    productType: "concealed hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/163238.jpg",
    price: 17.15,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0bb",
    title: "Altro Concealed Hinge - 60 x 13mm - Polished Chrome - Pair",
    productType: "concealed hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/169081.jpg",
    price: 16.5,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0bc",
    title: "Altro Concealed Hinge - 45 x 13mm - Polished Brass - Pair",
    productType: "concealed hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/162949.jpg",
    price: 12.0,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0dd",
    title: "Altro Concealed Hinge - 45 x 13mm - Polished Brass - Pair",
    productType: "flush hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/262021.jpg",
    price: 7.44,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0ze",
    title: "Flush Door Hinge - 75 x 50 x 1.7mm - Satin Chrome - Pair",
    productType: "flush hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/868272.jpg",
    price: 6.55,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0re",
    title:
      "Ball Bearing Flush Door Hinge - 102 x 74 x 2.5mm - Polished Stainless Steel - Pair",
    productType: "flush hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/940971.jpg",
    price: 8.89,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0wd",
    title:
      "Ball Bearing Flush Door Hinge - 100 x 72 x 2.5mm - Satin Chrome - Pair",
    productType: "flush hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/997517.jpg",
    price: 10.95,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0gt",
    title:
      "Olde Forge Tudor Plain Door Hinge - 410 x 105mm - Antique Black Iron - Pair",
    productType: "tee hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/407683.jpg",
    price: 31.0,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0zl",
    title:
      "Olde Forge Tudor Plain Door Hinge - 229 x 85mm - Antique Black Iron - Pair",
    productType: "tee hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/715401.jpg",
    price: 22.55,
  },
  {
    id: "1f2da4ef-c1b7-4b4e-b172-59f19987e0kf",
    title:
      "Olde Forge Tudor Plain Door Hinge - 270 x 110mm - Antique Black Iron - Pair",
    productType: "tee hinge",
    imageURL:
      "https://res.cloudinary.com/manutantraders/image/upload/t_400-scale/v27/ironmongery/products/433395.jpg",
    price: 28.9,
  },
];

/**
 * @typedef {Object} ProductsListEntry
 * @property {string} id - Unique identifier
 * @property {string} title - Title
 * @property {string} productType - Product type
 * @property {string} imageURL - Image URL
 * @property {number} price - Price
 */

/**
 * Retrieve a list of products, optionally filtered by product-type. Since
 * this function simulates an API, it will take up to 500ms to complete.
 *
 * @param {object} options
 * @param {string} options.product
 * @param {string} [options.productType]
 * @returns {Promise<{ products: ProductsListEntry[] }>}
 */
async function fetchProducts({ product, productType }) {
  await wait(randomInteger(500));

  if (typeof product !== "string" || product.trim() === "") {
    throw new Error("`search term` must be provided");
  }

  if (Math.random() > 0.95) {
    throw new Error("An unexpected error occurred");
  }

  let productsFilteredByType = sampleProducts;

  if (productType !== undefined) {
    productsFilteredByType = productsFilteredByType.filter(
      (product) => product.productType === productType
    );
  }

  const productsFilteredByProduct = productsFilteredByType.filter((item) =>
    item.title.toLowerCase().includes(product.toLowerCase())
  );

  return {
    products: productsFilteredByProduct,
  };
}

/**
 * @typedef {object} ProductType
 * @product {string} label - The text to display
 * @product {string} value - The enum value assigned
 */

/**
 * Retrieve a list of all available product types.
 *
 * @returns {Promise<{ productTypes: ProductType[] }>}
 */
async function getAvailableProductTypes() {
  await wait(randomInteger(500));

  return {
    productTypes: [
      { label: "Ball Bearing", value: "ball bearing" },
      { label: "Concealed Hinge", value: "concealed hinge" },
      { label: "Flush Hinge", value: "flush hinge" },
      { label: "Tee Hinge", value: "tee hinge" },
    ],
  };
}

export { fetchProducts, getAvailableProductTypes };
