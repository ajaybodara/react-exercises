// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import App from './component/app';

test('Successfully run', () => {
  renderer.create(
    <App />,
  );
});