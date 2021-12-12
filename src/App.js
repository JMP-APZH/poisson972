import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Registration from './components/Registration';
import DarkMode from './components/DarkMode';
import DarkMode2 from './components/DarkMode2';
import DMtoggle from './components/DMtoggle';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Sidebar />
      <Registration />
      <DarkMode />
      <DarkMode2 />
      <DMtoggle /> */}
    </div>
  );
}

export default App;
