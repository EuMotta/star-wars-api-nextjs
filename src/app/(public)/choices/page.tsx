import React from 'react';

import Container from '@/components/Container';
import Section from '@/components/Section';
import Choices from '@/templates/Choices/Choices';

const page = () => {
  return (
    <Section>
      <Container>
        <Choices />
      </Container>
    </Section>
  );
};

export default page;
