var Viewport =
webpackJsonpViewport([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/* eslint-env browser */

	'use strict';

	var viewport = {};
	var width = -1;
	var height = -1;


	// Public interface
	//------------------------------------------------------------------------------

	viewport.getWidth = function() {
	  return width;
	};

	viewport.getHeight = function() {
	  return height;
	};

	viewport.getMax = function() {
	  return Math.max(width, height);
	};

	viewport.getMin = function() {
	  return Math.min(width, height);
	};

	viewport.setDimensions = function() {
	  width = document.documentElement.clientWidth;
	  height = document.documentElement.clientHeight;
	};


	// Protected methods
	//------------------------------------------------------------------------------

	viewport.onWindowResize = function() {
	  viewport.setDimensions();
	};

	/* istanbul ignore else  */
	if (typeof window !== 'undefined') {
	  window.addEventListener('resize', viewport.onWindowResize, false);
	  window.addEventListener('orientationchange', viewport.onWindowResize, false);

	  viewport.setDimensions();
	}

	// Exports
	module.exports = viewport;


/***/ }
]);