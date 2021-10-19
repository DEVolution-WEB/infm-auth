import './App.css';
import Navbar from './components/navbar/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privateroute from './components/PrivateRoute';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Login} />
						<Privateroute path="/dashboard" component={Dashboard} />
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
