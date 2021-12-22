import { SplitScreen } from './SplitScreen';

const LeftCompoonent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>;
}
const RightCompoonent = () => {
  return <p style={{ backgroundColor: 'red' }}>Right!</p>;
}

function App() {
  return (
    <SplitScreen
      left = {LeftCompoonent}
      right = {RightCompoonent}
      leftWeight = {1}
      rightWeight = {3}
    />
  );
}

export default App;
