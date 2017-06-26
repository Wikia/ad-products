# AdEngine

## Installation

```bash
jspm install github:wikia/ad-engine@^1.1.0
```

## Usage (ES6)

### Load GPT library

Follow [DoubleClick for Publishers instructions](https://support.google.com/dfp_premium/answer/1638622?hl=en).

### Prepare configuration

Create context.js module with local config:

```javascript
'use strict';

import Context from 'wikia/ad-engine/src/services/context-service';

Context.extend({
	adUnitId: '/5441/name/_{custom.namespace}/{slotName}',
	events: {
		pushOnScroll: {
			ids: [
				'gpt-bottom-leaderboard'
			],
			threshold: 100
		}
	},
	slots: {
		'top-leaderboard': {
			slotName: 'TOP_LEADERBOARD',
			aboveTheFold: true,
			sizes: [
				{
					viewportSize: [970, 200],
					sizes: [[728, 90], [970, 250]]
				},
				{
					viewportSize: [728, 200],
					sizes: [[728, 90]]
				},
				{
					viewportSize: [0, 0],
					sizes: [[300, 250]]
				}
			],
			defaultSizes: [[728, 90], [970, 250]],
			targeting: {
				loc: 'top'
			}
		},
		'bottom-leaderboard': {
			disabled: true,
			slotName: 'BOTTOM_LEADERBOARD',
			sizes: [
				{
					viewportSize: [728, 100],
					sizes: [[728, 90]]
				},
				{
					viewportSize: [320, 200],
					sizes: [[320, 480]]
				}
			],
			defaultSizes: [],
			targeting: {
				loc: 'bottom'
			}
		}
	}
});

export default Context;

```

### Run AdEngine module

Setup custom page level targeting and initialize AdEngine.

```javascript
import AdEngine from 'wikia/ad-engine/src/ad-engine';
import Context from './context';

// ...

window.adsQueue = window.adsQueue || [];

// Setup adStack so slots can be pushed to window.* from DOM/other JS scripts
Context.set('state.adStack', window.adsQueue);

// Setup screen size
Context.set('state.isMobile', true);

// Setup custom variables so they can be used in adUnitId configuration
Context.set('custom.namespace', 'article');

// Setup gpt targeting
Context.set('targeting.post_id', 123);

new AdEngine().init();
```

### Request ad slot

Request immediately:

```html
<div id="gpt-top-leaderboard">
	<script>
		window.adsQueue.push({
			id: 'gpt-top-leaderboard'
		});
	</script>
</div>
```

or prepare on scroll container (check above context configuration):

```html
<div id="gpt-bottom-leaderboard"></div>
```

### Debug mode

Add `adengine_debug=1` to see all logged events in console.
In order to get logs from specified groups use `?adengine_debug=<group_name_1>,<group_name_2>,...`.

## Example pages

* [Floating ad template](examples/templates/floating-ad)
* [Playwire video player](examples/video/playwire)
* [Porvata video player](examples/video/porvata)
* [Slot animations](examples/slots/animations)

### Access examples

Start a python server by running

```bash
python -m SimpleHTTPServer 5555
```

Navigate to <http://localhost:5555/examples/>

## Run tests

```bash
npm run test
```

## Lint all files

```bash
npm run lint
```
