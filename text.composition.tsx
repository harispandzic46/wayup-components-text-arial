import React from 'react';
import { Text } from './text';
import { brandPrimary2 } from '@campusjob/wayup.styles.colors';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BasicText = () => (
  <Container>
    <Section>
      <Text size="xxl" color={brandPrimary2()}>Sizes</Text>
      <Text size="xxs">xxs</Text>
      <Text size="xs">xs</Text>
      <Text size="sm">sm</Text>
      <Text size="md">md</Text>
      <Text size="lg">lg</Text>
      <Text size="xl">xl</Text>
      <Text size="xxl">xxl</Text>
    </Section>
    <Section>
      <Text size="xxl" color={brandPrimary2()}>fontStyle</Text>
      <Text fontStyle="normal">normal</Text>
      <Text fontStyle="italic">italic</Text>
    </Section>
    <Section>
      <Text size="xxl" color={brandPrimary2()}>lineHeight</Text>
      <Text lineHeight="2em">doubleSpacer</Text>
      <Text lineHeight="1.5em">spacer</Text>
      <Text lineHeight="1em">halfSpacer</Text>
    </Section>
  </Container>
);
