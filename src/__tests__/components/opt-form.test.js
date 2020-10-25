import React from 'react';
import { render } from '@testing-library/react';
import { OptForm } from '../../components';

describe('<OptForm />', () => {
  it('Renders the <OptForm /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm></OptForm>
    );
  });
});
