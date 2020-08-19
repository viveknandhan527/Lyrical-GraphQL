import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

export const ExchangeRates = () => {
    const { loading, error, data } = useQuery(GET_DOGS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    console.log(data);

    return (
      <div name="dog">
        {data.dogs.map(dog => (
          <div key={dog.id} value={dog.breed}>
            {dog.breed}
          </div>
        ))}
      </div>
    );
}