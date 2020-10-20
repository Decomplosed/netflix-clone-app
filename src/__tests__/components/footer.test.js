import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('<Footer />', () => {
  it('Renders the <Footer /> with populated data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href='#'>FAQ</Footer.Link>
            <Footer.Link href='#'>Investor Relations</Footer.Link>
            <Footer.Link href='#'>Ways to Watch</Footer.Link>
            <Footer.Link href='#'>Corporate Information</Footer.Link>
            <Footer.Link href='#'>Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href='#'>Help Centre</Footer.Link>
            <Footer.Link href='#'>Jobs</Footer.Link>
            <Footer.Link href='#'>Terms of Use</Footer.Link>
            <Footer.Link href='#'>Contact Us</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer>,
    );
  });
});
