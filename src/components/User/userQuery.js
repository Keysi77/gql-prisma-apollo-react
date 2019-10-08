import { gql } from 'apollo-boost';

// * GraphQL querying

const GET_USERS = gql`
	query {
		users {
			id
			name
			posts {
				id
				title
                body
			}
		}
	}
`;

export { GET_USERS }