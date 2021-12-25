// import { Modal } from './components/Modal';

import { UserLoader } from "./containers/UserLoader";
import { UserInfo } from "./components/people/UserInfo";
// import { ProductInfo } from "./components/products/ProductInfo";

function App() {
	return (
		<>
		<UserLoader userId='123'>
			<UserInfo />
		</UserLoader>
		<UserLoader userId='124'>
			<UserInfo />
		</UserLoader>
		<UserLoader userId='125'>
			<UserInfo />
		</UserLoader>
		</>
	);
}

export default App;