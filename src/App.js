import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from './Team/data';
import List from './Team/List';
import Tours from './Tours/Tours';
import Loading from './Tours/Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [people, setPeople] = useState(data);
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <ToursContainer>
        <Loading />
      </ToursContainer>
    );
  }
  return (
    <>
      <ToursContainer>
        <Tours tours={tours} />
      </ToursContainer>
      <TeamContainer>
        <SectionContainer>
          <h3> {people.length} team members</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Fire all</button>
        </SectionContainer>
      </TeamContainer>
    </>
  );
}

export default App;

const ToursContainer = styled.div`
  width: 90vw;
  max-width: 620px;
  margin: 5rem auto;
`;

const TeamContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f28ab2;
`;

const SectionContainer = styled.div`
  width: 90vw;
  margin: 5rem 0;
  max-width: 450px;
  background: white;
  border-radius: 0.25rem;
  padding: 1.5rem 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);

  > h3 {
    font-weight: normal;
    text-transform: none;
    margin-bottom: 2rem;
  }

  > button {
    color: white;
    display: block;
    width: 100%;
    border-color: transparent;
    background: #f28ab2;
    margin: 2rem auto 0 auto;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    letter-spacing: 0.1rem;
    border-radius: 0.25rem;
    outline: 1px solid rgba(242, 138, 178, 0.8);
    cursor: pointer;
    text-transform: uppercase;
  }
`;
