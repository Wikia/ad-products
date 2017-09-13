# AdProducts

## Installation

```bash
npm install git+ssh://git@github.com:Wikia/ad-products.git@^1.0.0
```

## Usage (ES6)

### Load GPT library

```javascript
import AdEngine from 'ad-engine/ad-engine';
import TemplateLoader from 'ad-products/modules/template-loader';

// Run and congigure your ad-engine
// new AdEngine().init();

window.loadCustomAd = TemplateLoader.load;

```

## Example pages

Before you open an example page please run below command to build local js and css files.

```bash
npm install
npm run build
```

* [Floating rail](examples/templates/floating-rail)
* [Fan Takeover](examples/templates/uap)

## Development

In order to keep files updated on example pages use below command:

```bash
npm run watch
```

## Run tests

```bash
npm run test
```

## Lint all files

```bash
npm run lint
```
