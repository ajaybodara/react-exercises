import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import App from './components/App';

it('Successfully', () => {
    renderer.create(
        <MockedProvider addTypename={false}>
            <App />
        </MockedProvider>
   )
})