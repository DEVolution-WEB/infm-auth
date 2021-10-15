import './App.css';
// import Signup from './components/Signup';
import Navbar from './components/navbar/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privateroute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route
							path="/update-profile"
							component={UpdateProfile}
						/>

						<Route path="/login" component={Login} />
						<Route
							path="/forgot-password"
							component={ForgotPassword}
						/>
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
