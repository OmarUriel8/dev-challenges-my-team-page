import styled from '@emotion/styled';
import React from 'react';
import { team } from '../../helpers/db';
import { Card } from './Card';

export const TeamGalery = () => {
	return (
		<Galery>
			{team.map((person) => (
				<Card key={person.id} person={person} />
			))}
		</Galery>
	);
};

const Galery = styled.article`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
