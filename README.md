# AdProducts

## Dependencies

* [AdEngine](https://github.com/Wikia/ad-engine)

## Installation

```bash
npm install @wikia/ad-products --save
```

## Usage (ES6)

### Required files

Add listed files to your build step:

* src/styles/styles.scss

### Register template loader plugin in AdEngine

```javascript
import { AdEngine, templateService } from '@wikia/ad-engine';
import { FloatingRail } from '@wikia/ad-products';

templateService.register(FloatingRail, {
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

Name: **bfaa**

#### Default config:

```json
{
	"desktopNavbarWrapperSelector": ".wds-global-navigation-wrapper",
	"handleNavbar": false,
	"mobileNavbarWrapperSelector": ".global-navigation-mobile-wrapper",
	"slotSibling": ".topic-header",
	"slotsToEnable": [
		"BOTTOM_LEADERBOARD",
		"INCONTENT_BOXAD"
	]
}
```

Description:

* desktopNavbarWrapperSelector - desktop navbar DOM selector
* handleNavbar - decides whether template should adjust navbar
* mobileNavbarWrapperSelector - mobile navbar DOM selector
* slotSibling - DOM sibling element next to BFAA slot
* slotsToEnable - decides which slots should be enabled on Fan Takeover load

#### Template parameters:

* player
* slotName
* src
* uap
* lineItemId
* creativeId
* backgroundColor
* autoPlay
* resolvedStateAutoplay
* videoTriggers
* videoPlaceholderElement
* splitLayoutVideoPosition
* image1
* image2
* aspectRatio
* resolvedStateAspectRatio
* videoAspectRatio
* loadMedrecFromBTF
* moatTracking

### Big Fancy Ad Below

Name: **bfab**

#### Template parameters:

Check Big Fancy Ad Above.

### Floating rail

Name: **floatingRail**

#### Default config:

```json
{
	"enabled": true,
	"railSelector": "#rail",
	"wrapperSelector": "#rail-wrapper",
	"startOffset": 0
}
```

Description:

* enabled - decides whether template is usable
* railSelector - element which is going to have `position: fixed`
* wrapperSelector - rail wrapper
* startOffset - decides when rail starts floating

#### Template parameters:

* offset - how long (in px) rail is going to be fixed

#### Creative usage:

```html
<script>
top.loadCustomAd && top.loadCustomAd({
	type: 'floatingRail',
	offset: 500
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

## Lint all files

```bash
npm run lint
```

## Developing ad-products and ad-engine together

Use [npm link](https://docs.npmjs.com/cli/link)

0. Checkout both repositiories
1. Go to `ad-engine` directory and type
```npm link```
2. Go to `ad-products` directory and type
```npm link @wikia/ad-engine```

From now changes in `ad-engine` repo will be visible on `ad-products` demo pages.
