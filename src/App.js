import { SplitScreen } from './SplitScreen';

import LeftCompoonent from './components/LeftCompoonent';
import RightCompoonent from './components/RightCompoonent';


function App() {
  return (
    <SplitScreen leftWeight = {1} rightWeight = {3}>
      <LeftCompoonent name="Split Screen Component" />
      <RightCompoonent message="React rocks" />
    </SplitScreen>
  );
}

export default App;
