import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignUp } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
        },
      }),
    ),
  })),
};

describe('<SignUp />', () => {
  it('Renders the sign up page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>,
    );

    await act(async () => {});
  });
});
