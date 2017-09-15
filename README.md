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
import TemplateService from 'ad-engine/services/template-service';

import FloatingRail from 'ad-products/modules/templates/floating-rail';

TemplateService.register(FloatingRail, {
	startOffset: -15
});

// Configure and run your ad-engine
// ...
// new AdEngine(customContext).init();
// ...
```

### Call template from DFP creative

```html
<script>
top.loadCustomAd && top.loadCustomAd({
	type: 'floatingRail',
	// ...
});
</script>
```

## Available templates

### Big Fancy Ad Above

Name: *bfaa*

#### Template parameters:

* W
* I
* P

### Floating rail

Name: *floatingRail*

#### Default config:

```json
{
	enabled: true,
	railSelector: '#rail',
	wrapperSelector: '#rail-wrapper',
	startOffset: 0
}
```

Description:

* enabled - decides whether template is usable
* railSelector - element which is going to have `position: sticky`
* wrapperSelector - rail wrapper
* startOffset - decides when rail starts floating

#### Template parameters:

* W
* I
* P

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

## Lint all files

```bash
npm run lint
```
