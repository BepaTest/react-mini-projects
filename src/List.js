import React from 'react';
import styled from 'styled-components';

function List({ birthdays }) {
  return birthdays.map((birthday) => {
    const { id, name, age, image } = birthday;
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
    box-shadow: var(--light-shadow);
  }
  > div > h4 {
    margin-bottom: 0.35rem;
  }
  > div > p {
    margin-bottom: 0;
  }
`;
