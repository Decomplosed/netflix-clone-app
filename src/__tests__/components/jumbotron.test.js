import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumboData from '../../fixtures/jumbo';

describe('<Jumbotron />', () => {
  it('Renders the <Jumbotron /> with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
                data-testid={`${item.id}-jumbo-image`}
              />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>,
    );

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
  });
});
