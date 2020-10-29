import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectProfileContainer } from '../../containers/profiles';

jest.mock('react-router-dom');

describe('<Profiles />', () => {
  it('Renders the <Profiles />', () => {
    const user = { displayName: 'Bart', photoURL: 'profile.png' };
    const setProfile = jest.fn();
    const { getByTestId } = render();
  });
});
