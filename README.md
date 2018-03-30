# AdProducts

## Dependencies

* [AdEngine](https://github.com/Wikia/ad-engine)

## Installation

```bash
npm install github:Wikia/ad-products#semver:^4.2.0 --save
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


## Publish new version

:warning: Make sure you're using latest version of node/npm (preferably node@9.x.x and npm@5.x.x)
1. Use your regular workflow. Push changes to branch, test them and create pull request to dev.
2. Switch to dev branch once you merge all changes and pull new changes from github
3. Bump version (remember to follow Semantic Versioning)
```
npm version patch
```
This command runs preversion script which:

* run all tests
* lint all files
* build dist directory with output files for "client's" repositories
* adds built files to commited version
4. Push changes to github
```
git push --follow-tags
```
