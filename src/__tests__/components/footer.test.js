import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('<Footer />', () => {
  it('Renders the <Footer /> with populated data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title></Footer.Title>
      </Footer>,
    );
  });
});
