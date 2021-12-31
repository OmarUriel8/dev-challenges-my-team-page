import styled from '@emotion/styled';
import React from 'react';

export const Card = ({ person }) => {
	return (
		<ContainerCard>
			<Figure>
				<Position>{person.position}</Position>
				<div>
					<Image src={person.photo} alt={`Photo of ${person.name}`} />
				</div>
			</Figure>
			<h2>{person.name}</h2>
		</ContainerCard>
	);
};

const ContainerCard = styled.div`
	flex: 0 1 calc(50% - 2rem);
	@media (min-width: 768px) {
		flex: 0 1 calc(33% - 2rem);
	}
	&:nth-child(even) {
		margin-top: 6rem;
	}

	@media (min-width: 768px) {
		&:nth-child(4),
		&:nth-child(6) {
			margin-top: 0;
		}
		&:nth-child(5) {
			margin-top: 6rem;
		}
	}
`;
const Figure = styled.figure`
	margin: 0;
	display: flex;
`;

const Image = styled.img`
	max-width: 100%;
	height: auto;
	flex-basis: 90%;
`;
const Position = styled.figcaption`
	font-family: 'PT Serif', serif;
	text-transform: uppercase;
	writing-mode: vertical-rl;
	margin: 0;
	margin-left: 0.5rem;
	order: 1;
	/* text-orientation: mixed; */
`;
