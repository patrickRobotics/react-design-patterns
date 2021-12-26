import { useState } from "react";
import { ControlledOnboardingFlow } from "./components/ControlledOnboardingFlow";

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
		<button onClick={() => goToNext({ age: 69 })}>Next</button>
		</>
	);
}
const StepThree = ({ goToNext }) => {
	return(
		<>
		<h1>Step 3</h1>
		<p>Congratulations! You qualify for our senior package</p>
		<button onClick={() => goToNext({})}>Next</button>
		</>
	);
}
const StepFour = ({ goToNext }) => {
	return(
		<>
		<h1>Step 4</h1>
		<button onClick={() => goToNext({ hairColor: 'Brown' })}>Next</button>
		</>
	);
}



function App() {
	const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

	const onNext = stepData => {
		setOnBoardingData({ ...onBoardingData, ...stepData});
        setCurrentIndex(currentIndex + 1);
    }

	return (
		<ControlledOnboardingFlow
			currentIndex = {currentIndex}
			onNext = {onNext}
		>
			<StepOne />
			<StepTwo />
			{onBoardingData.age > 60 && <StepThree />}
			<StepFour />
		</ControlledOnboardingFlow>
	);
}

export default App;