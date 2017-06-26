'use strict';

import AdSkin from '../../templates/ad-skin';
import {rgb2hex} from '../../../../../src/scripts/main/utils/strings';

QUnit.module('AdSkin test', {
	beforeEach: function( assert ) {
		let refElem = document.createElement('div'),
			adSkinDiv = document.createElement('div');

		adSkinDiv.id = 'ad-skin';
		refElem.classList.add('ref-element');

		document.body.appendChild(adSkinDiv);
		document.body.appendChild(refElem);

		this.instance = new AdSkin({
			foo:'bar'
		}, refElem);
		this.refElem = refElem;
		this.adSkinDiv = adSkinDiv;

	},
	afterEach: function( assert ) {
		this.instance = null;

		this.adSkinDiv.parentElement.removeChild(this.adSkinDiv);
		this.adSkinDiv = null;

		this.refElem.parentElement.removeChild(this.refElem);
		this.refElem = null;
	}
});

QUnit.test('Constructor sets properties', function (assert) {
	assert.strictEqual(this.instance.params.foo, 'bar', 'Params property should be set');
	assert.strictEqual(this.instance.skinElem.id, 'ad-skin', 'skin element property is set');
	assert.ok(this.instance.skinStyle, 'skin style property is set');
	assert.ok(this.instance.scrollRefElem.classList.contains('ref-element'), 'reference element property is set');
});

QUnit.test('init sets body class', function (assert) {
	this.instance.init();
	assert.ok(document.body.classList.contains('skin-ad'), 'Body element should have a skin class');
});

QUnit.test('init sets background color and hash symbol', function (assert) {
	let instance = new AdSkin({
		backgroundColor: 'B4EEB4'
	}, this.refElem);

	instance.init();
	assert.strictEqual(
		rgb2hex(instance.skinStyle.backgroundColor),
		'#b4eeb4',
		'Background color with hash is set'
	);
});

QUnit.test('init sets background color', function (assert) {
	let instance = new AdSkin({
		backgroundColor: '#b4eeb4'
	}, this.refElem);

	instance.init();
	assert.strictEqual(
		rgb2hex(instance.skinStyle.backgroundColor),
		'#b4eeb4',
		'Background color with hash is set only once'
	);
});

QUnit.test('init does not set background color', function (assert) {
	let instance = new AdSkin({}, this.refElem);

	instance.init();
	assert.strictEqual(
		instance.skinStyle.backgroundColor,
		'',
		'Background should not be set where not provided'
	);
});
