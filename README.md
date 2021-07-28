# Books API (Node + Mongo + Ts + Docker + AWS )

- [Books API (Node + Mongo + Ts + Docker + AWS )](#books-api-node--mongo--ts--docker--aws-)
  - [1. Description](#1-description)
  - [2. Endpoint production](#2-endpoint-production)
  - [2. Requirements](#2-requirements)
  - [2.1 Extras](#21-extras)
  - [3. Techs](#3-techs)
  - [4. Scripts](#4-scripts)

## 1. Description

Api for adding and list books.

## 2. Endpoint production

- [Link](http://ec2-18-228-44-87.sa-east-1.compute.amazonaws.com:3333/books)

## 2. Requirements

- [x] Able to List books
- [x] Pagination on book's listing
- [x] Able to create book
- [x] Able to get a single book information

## 2.1 Extras

- [x] Able to upload book's image (optional)

## 3. Techs

- NodeJS
- Express
- Mongoose
- Yarn
- Swagger
- Docker
- Yup
- AWS S3
- Heroku
- Typescript
- Eslint
- Prettier

## 4. Scripts

```bash
# Clone this project
$ git clone

# Access
$ cd books_api

# Install dependencies
$ yarn install

# Run the project
$ yarn dev
# The server will initialize in the <http://localhost:3333>
```
