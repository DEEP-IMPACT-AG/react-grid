/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Col } from '../';

test('col', () => {
  expect(renderToString(<Col>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 1cpo20i-Col\\">.css-1cpo20i-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-1cpo20i-Col\\">children</div>"`
  );
});

test('col lg', () => {
  expect(renderToString(<Col>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 1cpo20i-Col\\">.css-1cpo20i-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-1cpo20i-Col\\">children</div>"`
  );
});

test('col xs=auto', () => {
  expect(renderToString(<Col xs="auto">children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css p61z5t-Col\\">.css-p61z5t-Col{box-sizing:border-box;position:relative;width:auto;padding-right:15px;padding-left:15px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-p61z5t-Col\\">children</div>"`
  );
});

test('col xs=2', () => {
  expect(renderToString(<Col xs={2}>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 1cvp71d-Col\\">.css-1cvp71d-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}</style><div data-eg-col=\\"true\\" class=\\"css-1cvp71d-Col\\">children</div>"`
  );
});

test('col xs lg=2', () => {
  expect(
    renderToString(
      <Col xs lg={2}>
        children
      </Col>
    )
  ).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css dehxsc-Col\\">.css-dehxsc-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width: 992px){.css-dehxsc-Col{-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}}</style><div data-eg-col=\\"true\\" class=\\"css-dehxsc-Col\\">children</div>"`
  );
});

test('col order', () => {
  expect(
    renderToString(<Col order={{ xs: 'first' }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 1cn0hda-Col\\">.css-1cn0hda-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;-webkit-order:-1;-ms-flex-order:-1;order:-1;}</style><div data-eg-col=\\"true\\" class=\\"css-1cn0hda-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col order={{ md: 1 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 1jhqy8d-Col\\">.css-1jhqy8d-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width: 768px){.css-1jhqy8d-Col{-webkit-order:1;-ms-flex-order:1;order:1;}}</style><div data-eg-col=\\"true\\" class=\\"css-1jhqy8d-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col order={{ lg: 'last' }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css j2itjv-Col\\">.css-j2itjv-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width: 992px){.css-j2itjv-Col{-webkit-order:13;-ms-flex-order:13;order:13;}}</style><div data-eg-col=\\"true\\" class=\\"css-j2itjv-Col\\">children</div>"`
  );
});

test('col offset', () => {
  expect(
    renderToString(<Col offset={{ xs: 2 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 10ta224-Col\\">.css-10ta224-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;margin-left:16.666667%;}</style><div data-eg-col=\\"true\\" class=\\"css-10ta224-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col offset={{ lg: 2 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 1ct2soa-Col\\">.css-1ct2soa-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width: 992px){.css-1ct2soa-Col{margin-left:16.666667%;}}</style><div data-eg-col=\\"true\\" class=\\"css-1ct2soa-Col\\">children</div>"`
  );
});
