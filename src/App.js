import { UserInfo } from "./components/people/UserInfo";
import { printProps } from "./components/printProps";


const UserInfoWrapped = printProps(UserInfo);

function App() {
	return (
		<UserInfoWrapped a={1} b="Hello" c={{ name: 'Shaun' }} />
	);
}

export default App;