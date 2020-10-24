import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';

jest.mock('react-router-dom');

describe('<Form />', () => {
  it('Renders the <Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form></Form>,
    );
  });
});
