import React from 'react';
import styled from 'styled-components';

function List({ people }) {
  return people.map((person) => {
    const { id, name, age, image } = person;
    return (
      <PersonContainer key={id}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </PersonContainer>
    );
  });
}

export default List;

const PersonContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;

  > img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  > div > h4 {
    margin-bottom: 0.35rem;
  }
  > div > p {
    margin-bottom: 0;
  }
`;
