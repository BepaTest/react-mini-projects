import React, { useState } from 'react';
import styled from 'styled-components';

function Tour({ name, id, image, info, price }) {
  return (
    <SingleTourContainer>
      <img src={image} alt={name} />
      <footer>
        <TourInfoContainer>
          <h4>{name}</h4>
          <PriceH4>${price}</PriceH4>
        </TourInfoContainer>
      </footer>
    </SingleTourContainer>
  );
}

export default Tour;

const SingleTourContainer = styled.article`
  background: white;
  border-radius: 0.25rem;
  margin: 2rem 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;

  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  > img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  > h4 {
    margin-bottom: 0;
  }
  > button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: hsl(205, 78%, 60%);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
  }

  > footer {
    padding: 1.5rem 2rem;
  }
`;

const TourInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  > h4 {
    margin-bottom: 0;
  }
`;

const PriceH4 = styled.h4`
  color: hsl(205, 78%, 60%);
  background: hsl(205, 100%, 96%);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;
