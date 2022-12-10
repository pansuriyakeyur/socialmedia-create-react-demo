import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import Rightside from './components/RightSide/Rightside';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
         <Sidebar></Sidebar>
         <MainDash></MainDash>
         <Rightside></Rightside>
      </div>
    </div>
  );
}

export default App;
