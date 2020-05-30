module.exports = {
  Query: {
    product: (_, data) => {
      const products = require("../fakeProducts.json");
      const { id, start, end } = data;

      /**
       * Request fragment of products
       * @example query
       * 
        query {
          product(start: 2, end: 11) {
            id
            price
            color
            name
          }
        }
      */
      if (!id && start && end) {
        return products.slice(data.start, data.end + 1);
      }

      /**
       * Request one
       * @example query
       * 
        query {
          product(id: "7") {
            id
            price
            color
            name
          }
        }
      */
      if (id) {
        return products.filter((product) => product.id === data.id);
      }

      /**
       * Request all
       * @example query
       * 
        query {
          product {
            id
            price
            color
            name
          }
        }
      */
      if (!id && !start && !end) {
        return products;
      }

      /**
       * Incorrect usage of query params returns empty array
       */
      return [];
    },
  },
};
