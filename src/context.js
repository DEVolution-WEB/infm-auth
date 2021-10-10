import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [password, setPassword] = useState({
		firstPassword: '',
		secondPassword: '',
	});
	const [activeBtn, setActiveBtn] = useState(false);

	return (
		<AppContext.Provider
			value={{
				password,
				setPassword,
				activeBtn,
				setActiveBtn,
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
