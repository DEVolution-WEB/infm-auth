import './App.css';
import Navbar from './components/navbar/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privateroute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
// import UpdateProfile from './components/UpdateProfile';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Login} />
						<Privateroute path="/dashboard" component={Dashboard} />
						{/* <Route
							path="/update-profile"
							component={UpdateProfile}
						/> */}

						{/* <Route path="/login" component={Login} /> */}
						{/* <Route
							path="/forgot-password"
							component={ForgotPassword}
						/> */}
						<Footer />
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;

// admin@dev.team
// Mdp: devteam
// https://player.vimeo.com/video/612967680?h=88610b9112&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
