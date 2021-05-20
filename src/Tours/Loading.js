import React from 'react';
import styled from 'styled-components';

function Loading() {
  return (
    <LoadingContainer>
      <h1>Loading...</h1>
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  text-align: center;
`;
