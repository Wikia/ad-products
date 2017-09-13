# AdProducts

## Dependencies

* [AdEngine](https://github.com/Wikia/ad-engine)

## Installation

```bash
npm install git+ssh://git@github.com:Wikia/ad-products.git@^1.0.0 --save
```

## Usage (ES6)

### Required files

Add listed files to your build step:

* src/styles/styles.scss

### Register template loader plugin in AdEngine

```javascript
import AdEngine from 'ad-engine/ad-engine';
import PluginLoader from 'ad-engine/services/plugin-loader';
import TemplateLoader from 'ad-products/modules/template-loader';

PluginLoader.add(TemplateLoader, 'loadCustomAd');

// Run and configure your ad-engine
// ...
// new AdEngine().init();
// ...
```

### Call template from DFP creative

```html
<script>
top.loadCustomAd && top.loadCustomAd({
	type: 'bfaa',
	// ...
});
</script>
```

## Example pages

Before you open an example page please run below command in order to build local js and css files.

```bash
npm install
npm run build
```

* [Floating rail](examples/templates/floating-rail)
* [Fan Takeover](examples/templates/uap)

## Contribution

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
