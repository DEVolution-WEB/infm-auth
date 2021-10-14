
import './assets/css/App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AppProvider } from './context';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privateroute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {
	return (
		<>
			<Router>
				<AppProvider>
					<AuthProvider>
						<Switch>
							<Privateroute
								exact
								path="/"
								component={Dashboard}
							/>
							<Privateroute
								path="/update-profile"
								component={UpdateProfile}
							/>
							<Route path="/signup" component={Signup} />
							<Route path="/login" component={Login} />
							<Route
								path="/forgot-password"
								component={ForgotPassword}
							/>
						</Switch>
					</AuthProvider>
				</AppProvider>
			</Router>
		</>
	);
}

export default App;
