import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequiredAuth from './Pages/Login/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
	return (
		<div className='max-w-7xl mx-auto px-12'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/home' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/appointment' element={
					<RequiredAuth>
						<Appointment />
					</RequiredAuth>
				}>
				</Route>
				<Route path='/dashboard' element={
					<RequiredAuth>
						<Dashboard />
					</RequiredAuth>
				}>
					<Route index element={<MyAppointments />}></Route>
					<Route path='review' element={<MyReview />}></Route>
					<Route path='history' element={<MyHistory />}></Route>
				</Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
