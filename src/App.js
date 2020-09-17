import React from 'react';
import jumboData from './fixtures/jumbo.json';
import Jumbotron from './components/jumbotron';

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          <p>{item.image}</p>
          <p>{item.alt}</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
