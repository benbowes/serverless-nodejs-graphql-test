/**
 * Generate some fake data
 */

const fs = require("fs");
const faker = require("faker");

const data = [...Array(100).keys()].map((_v, i) => ({
  id: `${i + 1}`,
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  color: faker.commerce.color(),
}));

fs.writeFileSync("fakeProducts.json", JSON.stringify(data, null, 2));
