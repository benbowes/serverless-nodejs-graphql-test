# serverless-nodejs-graphql-test

## A serverless GraphQL AWS lambda endpoint

#### Some example queries

```
// Request a fragment of products

query {
    product(start: 2, end: 11) {
        id
        price
        color
        name
    }
}

// Returns the 2nd product, through to the 11th product
```

```
// Request one product

query {
    product(id: "7") {
        id
        price
        color
        name
    }
}

// Returns the product that matches the id
```

```
// Request all products

query {
    product {
        id
        price
        color
        name
    }
}

// Returns all products
```
