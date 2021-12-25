// import { Modal } from './components/Modal';

import { CurrentUserLoader } from "./containers/CurrentUserLoader";
import { UserInfo } from "./components/people/UserInfo";
// import { ProductInfo } from "./components/products/ProductInfo";

function App() {
	return (
		<CurrentUserLoader>
			<UserInfo />
		</CurrentUserLoader>
	);
}

export default App;