import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature />', () => {
  it('Renders the <Feature /> with populated data', () => {
    const { container, getByText } = render();
  });
});
