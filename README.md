[![Version][npm version]][npm url] ![License][license] [![test][test workflow]][test result]

# Distance Matrix API v2

Node.js wrapper for the Goople Distance Matrix API.

# About

The motivation with this module is to provide a wrapper over google distance matrix api in node js.

# Getting Started

Install Distance Matrix API v2:

```shell
npm i distance-matrix-2
```

or

```shell
yarn add distance-matrix-2
```

# Example:

When creating a new instance of the distance matrix service, you can optionally pass an API key.

- Connection status.

```js
import { DistanceMatrixService } from "distance-matrix-2";

// You can pass the api key via constructor.
const service = new DistanceMatrixService(process.env.API_KEY);

// Also using the setKey method.
service.setKey(process.env.API_KEY);

const res = await service.getDistanceMatrix({ ...options });

console.log(res.status);
console.log(res.destination_addresses);
console.log(res.origin_addresses);
console.log(res.rows);
```

# API

## .setKey( key )

- Overrides the current google api key.

## .getDistanceMatrix( options )

- Get the result from the google distance matrix api.

- The available options can be found in the [google distance matrix api docs][google docs].

# Notes

- Updated version of some distance matrix apis.

- Version 1.0.0 is broken, don't use it.

# Licence

MIT

[google docs]: https://developers.google.com/maps/documentation/distance-matrix/overview
[test workflow]: https://github.com/Akuqt/distance-matrix-2/actions/workflows/test.yml/badge.svg
[test result]: https://github.com/Akuqt/distance-matrix-2/actions/workflows/test.yml
[npm version]: https://img.shields.io/npm/v/distance-matrix-2.svg?logo=npm
[npm url]: https://www.npmjs.com/package/distance-matrix-2
[license]: https://img.shields.io/npm/l/distance-matrix-2
