import { ResourceLoader } from "./containers/ResourceLoader";
import { UserInfo } from "./components/people/UserInfo";
import { ProductInfo } from "./components/products/ProductInfo";

function App() {
	return (
		<>
		<ResourceLoader resourceUrl="/users/123" resourceName="user" >
			<UserInfo />
		</ResourceLoader>
		<ResourceLoader resourceUrl="/products/1003" resourceName="product" >
			<ProductInfo />
		</ResourceLoader>
		</>
	);
}

export default App;