import { UserInfo } from "./components/people/UserInfo";
import { withUser } from './components/people/withUser';


const UserInfoWithLoader = withUser(UserInfo, '124');

function App() {
	return (
		<UserInfoWithLoader a={1} b="Hello" c={{ name: 'Shaun' }} />
	);
}

export default App;