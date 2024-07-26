import { Routes, Route } from 'react-router-dom';
// import MainLayout from './pages/MainLayout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';

function App() {
	return (
		<div className='App'>
		<Navbar />	
		<Routes>
		<Route path='/' element={<Shop />}> </Route>
		<Route path='/Men' element={<Men />}> </Route>
		<Route path='/Women' element={<Women />}> </Route>
		<Route path='/Kids' element={<Kids />}> </Route>
		</Routes>
		</div>
	);
}

export default App;
