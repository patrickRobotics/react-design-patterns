import axios from "axios";

import { ResourceLoader } from "./containers/ResourceLoader";
import { DataSource } from "./containers/DataSource";
import { UserInfo } from "./components/people/UserInfo";
import { ProductInfo } from "./components/products/ProductInfo";

const getServerData = url => async() => {
	const response = await axios.get(url);
	return response.data;
}

function App() {
	return (
		<>
		< DataSource getDataFunc={ getServerData('/users/123') } resourceName="user">
			<UserInfo />
		</DataSource>
		</>
	);
}

export default App;