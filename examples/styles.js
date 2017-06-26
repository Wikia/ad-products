import css from 'ad-engine-products/styles/styles.scss!';

const head = document.getElementsByTagName('head')[0],
	styles = document.createElement('style');

styles.setAttribute('type', 'text/css');
styles.appendChild(document.createTextNode(css));
head.appendChild(styles);