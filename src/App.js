import axios from "axios";

import { ResourceLoader } from "./containers/ResourceLoader";
import { DataSource } from "./containers/DataSource";
import { UserInfo } from "./components/people/UserInfo";
import { ProductInfo } from "./components/products/ProductInfo";

function App() {
	return (
		<>
		< DataSource getDataFunc={async() => {
			const response = await axios.get(`/users/123`);
            return response.data;
		}} resourceName="user">
			<UserInfo />
		</DataSource>
		</>
	);
}

export default App;