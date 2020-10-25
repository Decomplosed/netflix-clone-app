import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading />', () => {
  it('Renders the <Loading />', () => {
    const { container, getByTestId } = render(<Loading src="/images/karl.png" data-testid="loading" />);
  });
});
