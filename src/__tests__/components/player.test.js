import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../componentsnts';

describe('<Player />', () => {
  it('Renders the <Player /> with a bunny video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button>
          <Player.Video src='/videos/bunny.mp4' />
        </Player.Button>
      </Player>,
    );
  });
});
