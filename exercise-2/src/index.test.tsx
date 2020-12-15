import React from 'react';
import renderer from 'react-test-renderer'
import App from './component/app';

test('Successfully', () => {
    renderer.create(<App />);
})