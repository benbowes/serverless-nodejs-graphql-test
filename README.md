# serverless-nodejs-graphql-test

## A serverless GraphQL AWS lambda endpoint

#### Some example queries

Note: `start` is zero based, whereas `count` is not zero based

## Getting started locally

`npm i && npm run dev`

```
// Request a fragment of products


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

// Returns the 2nd product, through to the 11th product
```

```
// Request one product

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

// Returns the product that matches the id
```

```
// Request via serach term

query {
    product(searchTerm: "chair", start: 3, count: 10) {
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

// Returns the products that matches on color or name begining at the 3rd result, up to ten results
```

```
// Request all products

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

// Returns all products
```
