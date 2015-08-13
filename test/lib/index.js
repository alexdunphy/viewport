/* eslint-env browser, mocha */
/* global expect, Viewport, sinon */
/* eslint no-unused-expressions: 0 */

'use strict';

describe('Viewport', function() {
  var $window = window.jQuery(window);
  var jQueryWinWidth = $window.width();
  var jQueryWinHeight = $window.height();

  it('should be defined as an object', function() {
    expect(Viewport).to.be.an('object');
  });

  it('should agree with jQuery about viewport width', function() {
    expect(Viewport.getWidth()).to.equal(jQueryWinWidth);
  });

  it('should agree with jQuery about viewport height', function() {
    expect(Viewport.getHeight()).to.equal(jQueryWinHeight);
  });

  it('should return the largest dimension in #getMax', function() {
    expect(Viewport.getMax()).to.equal(
      Math.max(jQueryWinWidth, jQueryWinHeight)
    );
  });

  it('should return the smallest dimension in #getMin', function() {
    expect(Viewport.getMin()).to.equal(
      Math.min(jQueryWinWidth, jQueryWinHeight)
    );
  });

  it('should call #setDimensions once on window#resize', function() {
    var spy = sinon.spy(Viewport, 'setDimensions');
    var event = document.createEvent('Event');
    event.initEvent('resize', true, true);
    window.dispatchEvent(event);

    expect(spy.should.have.been.calledOnce);
  });
});
