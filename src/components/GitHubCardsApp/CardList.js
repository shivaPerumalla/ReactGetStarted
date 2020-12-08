import React from 'react';
import Card from './Card';
export default CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);