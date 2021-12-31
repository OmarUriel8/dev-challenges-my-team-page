import styled from '@emotion/styled';
import React from 'react';

export const TextInfo = () => {
	return (
		<ContainerMain>
			<Heading1>The creative crew</Heading1>
			<section>
				<Heading2>Who We Are</Heading2>
				<Text>
					We are team of creatively diverse, driven, innovative individuals working in
					various locations from the world.
				</Text>
			</section>
		</ContainerMain>
	);
};

const ContainerMain = styled.div`
	font-family: 'Poppins', sans-serif;
	display: flex;
	flex-direction: column;
	margin-bottom: 4rem;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;
const Heading1 = styled.h1`
	font-family: 'PT Serif', serif;
	font-size: 2.25rem;
	flex: 0 1 100%;
`;

const Heading2 = styled.h2`
	h2 {
		text-transform: uppercase;
	}
`;

const Text = styled.p`
	padding-right: 4rem;
	font-size: 1.125rem;
	line-height: 1.68rem;
	font-weight: 400;
`;
