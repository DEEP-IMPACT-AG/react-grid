/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Row } from '../';

test('row', () => {
  expect(renderToString(<Row>children</Row>)).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css sfu80s-Row\\">.css-sfu80s-Row{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}</style><div data-eg-row=\\"true\\" class=\\"css-sfu80s-Row\\">children</div>"`
  );
});

test('row noGutters', () => {
  expect(renderToString(<Row noGutters>children</Row>)).toMatchInlineSnapshot(
    `"<style data-emotion=\\"css 165j3sy-Row\\">.css-165j3sy-Row{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;margin-right:0;margin-left:0;}.css-165j3sy-Row>[data-eg-col]{padding-right:0;padding-left:0;}</style><div data-eg-row=\\"true\\" class=\\"css-165j3sy-Row\\">children</div>"`
  );
});
