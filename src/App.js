
import { useState } from 'react';

import { ControlledModal } from "./components/ControlledModal";

function App() {
	const [shouldShowModal, setShouldShowModal] = useState(false);
	return (
		<>
		<ControlledModal
			shouldShow={shouldShowModal}
			onRequestClose={() => setShouldShowModal(false)}>
				<h1>Hello world!</h1>
		</ControlledModal>
		<button 
			onClick={
				() => setShouldShowModal(!shouldShowModal)
			}>
			Show Modal
		</button>
		</>
	);
}

export default App;