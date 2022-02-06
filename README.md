## API "Car" solution

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

## Setup

To run this project, install it locally using npm

```
$ npm install
```

## How to start

```
$ npm start
```

## Example requests

```js
// Create car
await fetch(`localhost:3456/car`, {
  method: 'POST',
  body: JSON.stringify({
    vin: '5FNRL18613B046732',
    make: 'Honda',
    model: 'Odyssey',
    year: 2003,
    registrationCode: '111AAA',
  }),
});

// Update car
await fetch(`localhost:3456/car/5FNRL18613B046732`, {
  method: 'PATCH',
  body: JSON.stringify({
    registrationCode: '222BBB',
  }),
});

// Fetch cars (method: GET)
await fetch(`localhost:3456/car`);

// Fetch a spesific car
await fetch(`localhost:3456/car/5FNRL18613B046732`);

// Delete a car
await fetch(`localhost:3456/car/5FNRL18613B046732`, {
  method: 'DELETE',
});
```
