<h1 align="center">Welcome to simple-blog-api-with-graphql 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Simple blog api with graphql

### localhost:8000/graphql adresinden sorgu işlemleri yapabilirsiniz.

### Request atmak için localhost:8000/graphql endpoint'ine POST method, Content-Type: application/json ve body içerisinde "query" parametresi yollayarak yapabilirsiniz.

#### Example Request

- curl -XPOST -H "Content-type: application/json" -d '{"query": "{blogs{\_id,title,content,user{\_id,name,surname}}}"}' 'http://localhost:8000/graphql'

## Screenshot

<h1 align="center">
  <img src="./images/ss2.png">
  <img src="./images/ss.png">
</h1>

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Author

👤 **Ahmet Korkmaz <muratahmetkorkmaz@hotmail.com>**

- Website: [ahmetkorkmaz3.github.io](https://ahmetkorkmaz3.github.io)
- Github: [@ahmetkorkmaz3](https://github.com/ahmetkorkmaz3)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
