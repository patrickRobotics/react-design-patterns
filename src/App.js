import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => {
	return(
		<>
		<h1>Step 1</h1>
		<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
		</>
	);
}
const StepTwo = ({ goToNext }) => {
	return(
		<>
		<h1>Step 2</h1>
		<button onClick={() => goToNext({ age: 19 })}>Next</button>
		</>
	);
}
const StepThree = ({ goToNext }) => {
	return(
		<>
		<h1>Step 3</h1>
		<button onClick={() => goToNext({ hairColor: 'Brown' })}>Next</button>
		</>
	);
}


function App() {
	return (
		<UncontrolledOnboardingFlow onFinish={data => {
			console.log(data);
		 	alert('Onboarding completed!');
		}}>
			<StepOne />
			<StepTwo />
			<StepThree />
		</UncontrolledOnboardingFlow>
	);
}

export default App;