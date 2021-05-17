import React, { useState } from 'react';
import data from './data';
import List from './List';
import styled from 'styled-components';

function App() {
  const [birthdays, setBirthdays] = useState(data);
  return (
    <AppMainContainer>
      <SectionContainer>
        <h3> {birthdays.length} team members</h3>
        <List birthdays={birthdays} />
        <button onClick={() => setBirthdays([])}>Fire all</button>
      </SectionContainer>
    </AppMainContainer>
  );
}

export default App;

const AppMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.div`
  width: 90vw;
  margin: 5rem 0;
  max-width: var(--fixed-width);
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  box-shadow: var(--dark-shadow);

  > h3 {
    font-weight: normal;
    text-transform: none;
    margin-bottom: 2rem;
  }

  > button {
    color: var(--clr-white);
    display: block;
    width: 100%;
    border-color: transparent;
    background: var(--clr-pink);
    margin: 2rem auto 0 auto;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    letter-spacing: var(--spacing);
    border-radius: var(--radius);
    outline: 1px solid rgba(242, 138, 178, 0.8);
    cursor: pointer;
    text-transform: uppercase;
  }
`;
