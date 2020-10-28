import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header />', () => {
  it('Renders the basic <Header /> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src='/logo.svg' alt='Netflix' />
          <Header.TextLink active='true'>Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>,
    );

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders the basic <Header /> without a background', () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src='/logo.svg' alt='Netflix' />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.TextLink active={false}>Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>,
    );

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(queryByTestId('header-bg')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders the full <Header> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header src='joker1' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src='/images/logo.svg' alt='Netflix' />
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm='Joker' setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src='/images/karl.png' />
              <Header.Dropdown>
                <Header.Group></Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </Header>,
    );
  });
});
