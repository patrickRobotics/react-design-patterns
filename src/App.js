import axios from "axios";

import { ResourceLoader } from "./containers/ResourceLoader";
import { DataSource } from "./containers/DataSource";
import { UserInfo } from "./components/people/UserInfo";
import { ProductInfo } from "./components/products/ProductInfo";

const getServerData = url => async() => {
	const response = await axios.get(url);
	return response.data;
}

const getDataFromLocalStorage = key => () => {
	return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{ message }</h1>;

function App() {
	return (
		<>
		<DataSource getDataFunc={ getServerData('/users/123') } resourceName="user">
			<UserInfo />
		</DataSource>

		<DataSource getDataFunc={ getDataFromLocalStorage('message') } resourceName="message">
			<Text />
		</DataSource>
		</>
	);
}

export default App;