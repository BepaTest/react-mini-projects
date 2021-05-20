import React from 'react';
import Tour from './Tour';
import styled from 'styled-components';

function Tours({ tours }) {
  return (
    <ToursContainer>
      <h2>Our Tours</h2>
      <UnderlineContainer />
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </ToursContainer>
  );
}

export default Tours;

const ToursContainer = styled.div`
  width: 95wv;

  > h2 {
    text-align: center;
  }
`;

const UnderlineContainer = styled.div`
  width: 6rem;
  height: 0.25rem;
  background: hsl(205, 78%, 60%);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
`;
