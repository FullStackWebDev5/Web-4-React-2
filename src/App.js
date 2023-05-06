import './App.css';
import IntroSection1 from './components/IntroSection1/IntroSection1'
import IntroSection2 from './components/IntroSection2/IntroSection2'

const App = () => {
	let candidateName = 'John Doe'
	return (
		<div className="App">
			<p id="main-title">{candidateName}</p>
			<IntroSection1 />
			<IntroSection2 />
		</div>
	)
}

export default App;















/*
	{}: Used in JSX to include any JavaScript expression

	HTML: Tags -> Attributes, React: Components -> Props

	## Inline Style: Property names in camelcase

*/