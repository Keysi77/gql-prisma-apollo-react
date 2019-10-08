import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from './userQuery';
import { map, get } from 'lodash'

// * render
const User = () => {
	const { loading, error, data } = useQuery(GET_USERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	return map(data.users, (user) => (
		<div key={user.id}>
			<h2>{user.name}</h2>
			<p>{user.id}</p>
			{map(get(user, 'posts'), (post) => {
				return (
					<div key={post.id}>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
					</div>
				)
			})}
		</div>
	));
};

export default User;
