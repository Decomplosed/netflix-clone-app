import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';

jest.mock('react-router-dom');

describe('<Form />', () => {
  it('Renders the <Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>

        <Form.Base>
          <Form.Input placeholder='Email address' onChange={() => {}} />
          <Form.Input
            type='password'
            placeholder='Password'
            onChange={() => {}}
          />
          <Form.Submit type='submit' disabled>
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
        </Form.Text>
      </Form>,
    );
  });
});
