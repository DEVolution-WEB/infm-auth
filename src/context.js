import React, { useState, useContext, useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [password, setPassword] = useState({
		firstPassword: '',
		secondPassword: '',
	});
	const [activeBtn, setActiveBtn] = useState(false);
	const [users, setUsers] = useState([]);
	const [formations, setFormations] = useState([]);
	const [modal, setModal] = useState(false);
	const [isFetched, setIsFetched] = useState(false);

	return (
		<AppContext.Provider
			value={{
				password,
				setPassword,
				activeBtn,
				setActiveBtn,
				users,
				setUsers,
				modal,
				setModal,
				formations,
				setFormations,
				isFetched,
				setIsFetched,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
