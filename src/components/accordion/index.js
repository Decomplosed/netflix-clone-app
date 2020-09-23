import React, { useState } from 'react';

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Fram = function AccordionFrame({ children, ...restProps }) {
  return <Fram {...restProps}>{children}</Fram>;
};
