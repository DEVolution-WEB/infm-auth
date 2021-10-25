import Navbar from './components/Layout/NavBar';
import LoginPage from './pages/LoginPage';
import CheckAuth from './components/Utils/CheckAuth';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privateroute from './components/Utils/PrivateRoute';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Navbar />
					<Switch>
						<Route exact path='/' component={LoginPage} />
						<Privateroute path='/dashboard' component={CheckAuth} />
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
