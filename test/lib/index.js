/* eslint-env browser, mocha */
/* global expect, viewport, sinon */
/* eslint no-unused-expressions: 0 */

'use strict';

describe('viewport', function() {
  var $window = window.jQuery(window);
  var jQueryWinWidth = $window.width();
  var jQueryWinHeight = $window.height();

  it('should be defined as an object', function() {
    expect(viewport).to.be.an('object');
  });

  it('should agree with jQuery about viewport width', function() {
    expect(viewport.getWidth()).to.equal(jQueryWinWidth);
  });

  it('should agree with jQuery about viewport height', function() {
    expect(viewport.getHeight()).to.equal(jQueryWinHeight);
  });

  it('should return the largest dimension in #getMax', function() {
    expect(viewport.getMax()).to.equal(
      Math.max(jQueryWinWidth, jQueryWinHeight)
    );
  });

  it('should return the smallest dimension in #getMin', function() {
    expect(viewport.getMin()).to.equal(
      Math.min(jQueryWinWidth, jQueryWinHeight)
    );
  });

  it('should call #setDimensions once on window#resize', function() {
    var spy = sinon.spy(viewport, 'setDimensions');
    var event = document.createEvent('Event');
    event.initEvent('resize', true, true);
    window.dispatchEvent(event);

    expect(spy.should.have.been.calledOnce);
  });
});
