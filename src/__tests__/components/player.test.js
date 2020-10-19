import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../components';

describe('<Player />', () => {
  it('Renders the <Player /> with a bunny video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button>
          <Player.Video src='/videos/bunny.mp4' />
        </Player.Button>
      </Player>,
    );

    expect(queryByTestId('player').toBeFalsy());
  });
});
