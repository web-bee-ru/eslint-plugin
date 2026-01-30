# @web-bee-ru/eslint-plugin

## Install

### Base config

``` bash
$ npm i --save-dev @web-bee-ru/eslint-plugin
```

### React config

``` bash
$ npm i --save-dev @web-bee-ru/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
```

### Next config

``` bash
$ npm i --save-dev @web-bee-ru/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
```

### Vue config

``` bash
$ npm i --save-dev @web-bee-ru/eslint-plugin eslint-plugin-vue
```

### Nuxt config

``` bash
$ npm i --save-dev @web-bee-ru/eslint-plugin eslint-plugin-vue eslint-import-resolver-nuxt
```

## Using

### Available configs:

``` js
// esm
import base from "@web-bee-ru/eslint-plugin"
import react from "@web-bee-ru/eslint-plugin/react"
import next from "@web-bee-ru/eslint-plugin/next"
import vue from "@web-bee-ru/eslint-plugin/vue"
import nuxt from "@web-bee-ru/eslint-plugin/nuxt"

// commonjs
const base = require("@web-bee-ru/eslint-plugin")
const react = require("@web-bee-ru/eslint-plugin/react")
const next = require("@web-bee-ru/eslint-plugin/next")
const vue = require("@web-bee-ru/eslint-plugin/vue")
const nuxt = require("@web-bee-ru/eslint-plugin/nuxt")
```

### In your eslint.config.js

```js
import { defineConfig } from "eslint/config";
import base from "@web-bee-ru/eslint-plugin"

export defineConfig([
 ...base,
 // Or 
 {
   extends: {
      base,
   }
 }
]);
```

### peerDependencies

- @stylistic/eslint-plugin
- typescript-eslint
- eslint
- eslint-config-prettier
- eslint-import-resolver-alias
- eslint-import-resolver-node
- eslint-import-resolver-nuxt [ optional ]
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-react [ optional ]
- eslint-plugin-react-hooks [ optional ]
- eslint-plugin-vue [ optional ]
