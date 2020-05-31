module.exports = {
  Query: {
    product: (_, { id, start, count, searchTerm }) => {
      const products = require("../fakeProducts.json");

      if (start !== undefined && count !== undefined && !id && !searchTerm) {
        /**
       * Request fragment of products
       * @example query
       *
        query {
          product(start:10, count: 10) {
            totalResults
            start
            count
            products {
              id
              color
              name
              price
            }
          }
        }
      */
        return {
          products: products.slice(start, count + start),
          totalResults: products.length,
          start,
          count,
        };
      }

      if (id !== undefined) {
        /**
       * Request one product based on id
       * @example query
       *
        query {
          product(id: "7") {
            totalResults
            start
            count
            products {
              id
              color
              name
              price
            }
          }
        }
      */
        const found = products.filter((product) => product.id === id);
        return {
          products: found,
          totalResults: found.length,
          start: 0,
          count: found.length,
        };
      }

      if (searchTerm !== undefined) {
        /**
       * Request via serach term
       * @example query
       * @param {start} Int optional
       * @param {count} int optional
       *
        query {
          product(searchTerm: "chair", start:1, count: 3) {
            totalResults
            start
            count
            products {
              id
              color
              name
              price
            }
          }
        }
      */
        const startFrom = start || 0;
        const countTo = (count && count + startFrom) || 0;
        const results = products.filter(
          (product) =>
            product.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
          products:
            countTo === 0
              ? results.slice(startFrom)
              : results.slice(startFrom, countTo),
          totalResults: results.length,
          start: startFrom,
          count: countTo,
        };
      }

      /**
       * When no params, return everything
       * @example query
       *
        query {
          product {
            totalResults
            start
            count
            products {
              id
              color
              name
              price
            }
          }
        }
       */
      return {
        products,
        totalResults: products.length,
        start: 0,
        count: products.length,
      };
    },
  },
};
