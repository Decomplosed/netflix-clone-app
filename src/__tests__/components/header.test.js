import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header />', () => {
  it('Renders the basic <Header /> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame></Header.Frame>
      </Header>,
    );
  });
});
