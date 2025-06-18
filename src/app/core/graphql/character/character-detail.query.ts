import { gql } from 'apollo-angular';

export const GET_CHARACTER_DETAIL = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        name
        type
        dimension
        residents {
          id
          name
        }
      }
      location {
        name
        type
        dimension
        residents {
          id
          name
        }
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;
