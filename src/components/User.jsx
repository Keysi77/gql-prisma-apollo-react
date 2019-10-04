import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// * graphql querying
const GET_USERS = gql`
	query {
		users {
			id
			name
			email
			posts {
				title
				id
			}
		}
	}
`;

// * render
const User = () => {
	const { loading, error, data } = useQuery(GET_USERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	// console.log(data);
	return data.users.map((user) => (
		<div key={user.id}>
			<h3>{user.name}</h3>
		</div>
	));
};

export default User;
