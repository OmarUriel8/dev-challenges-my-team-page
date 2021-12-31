import styled from '@emotion/styled';
import { Footer } from './components/Footer';
import { TeamGalery } from './components/team/TeamGalery';
import { TextInfo } from './components/team/TextInfo';

function App() {
	return (
		<Container>
			<TextInfo />
			<TeamGalery />
			<Footer />
		</Container>
	);
}

const Container = styled.main`
	max-width: 75rem;
	width: 95%;
	margin: 1rem auto;
`;
export default App;
