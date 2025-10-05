import React from 'react';
import { Text } from './text';
import { brandPrimary2  } from '@campusjob/wayup.styles.colors';
import GridContainer from '@campusjob/wayup.components.gridcontainer';
import Row from '@campusjob/wayup.components.row';
import Column from '@campusjob/wayup.components.column';
import Spacer from '@campusjob/wayup.components.spacer';

import styled from 'styled-components';
import { 
  halfSpacer, 
  spacer,
  doubleSpacer, 
} from '@campusjob/wayup.styles.layout';

export const BasicText = () => (
  <GridContainer>
    <Spacer />
    <Row>
      <Column xs={4}>
        <Text size="xxl" color={brandPrimary2()}>Sizes</Text>
        <Spacer />
        <Text size="xxs">xxs</Text>
        <Text size="xs">xs</Text>
        <Text size="sm">sm</Text>
        <Text size="md">md</Text>
        <Text size="lg">lg</Text>
        <Text size="xl">xl</Text>
        <Text size="xxl">xxl</Text>
      </Column>
      <Column xs={4}>
        <Text size="xxl" color={brandPrimary2()}>fontStyle</Text>
        <Spacer />
        <Text fontStyle="normal">normal</Text>
        <Text fontStyle="italic">italic</Text>
      </Column>
      <Column xs={4}>
        <Text size="xxl" color={brandPrimary2()}>lineHeight</Text>
        <Spacer />
        <Text lineHeight={doubleSpacer}>doubleSpacer</Text>
        <Text lineHeight={spacer}>spacer</Text>
        <Text lineHeight={halfSpacer}>halfSpacer</Text>
      </Column>
    </Row>
  </GridContainer>
);
