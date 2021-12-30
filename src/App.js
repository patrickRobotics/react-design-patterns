import { UserInfo} from './components/people/UserInfo';
import {ProductInfo} from './components/products/ProductInfo';


function App() {
	return (
		<>
		<UserInfo userId="123" />
		<ProductInfo productId="1003" />
		</>
	);
}

export default App;