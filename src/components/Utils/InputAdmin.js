import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../App.css';

const Inputadmin = ({ emailRef, passwordRef, passwordConfirmRef, setFormationName, formationName, selectedFormations, setUserName, userName, email, setEmail, setFirst, setSecond, error }) => {
	return (
		<>
			<div className='md-input-main font-sans text-lg mt-12'>
				<div className='md-input-box relative'>
					<input type='text' className='md-input w-full text-black' placeholder=' ' onChange={(e) => setUserName(e.target.value)} required value={userName} />
					<label className={`md-label absolute pointer-events-none block  ${error ? 'text-red-600' : 'text-darkBlueCust'}`} htmlFor='name'>
						Nom
					</label>
					<div className={`md-input-underline absolute left-0 right-0 pointer-events-none ${error && 'error'}`} />
				</div>
			</div>
			<div className='md-input-main font-sans text-lg mt-5'>
				<div className='md-input-box relative'>
					<input type='email' ref={emailRef} className='md-input w-full text-black' placeholder=' ' onChange={(e) => setEmail(e.target.value)} required value={email} />
					<label className={`md-label absolute pointer-events-none block  ${error ? 'text-red-600' : 'text-darkBlueCust'}`} htmlFor='email'>
						Email
					</label>
					<div className={`md-input-underline absolute left-0 right-0 pointer-events-none ${error && 'error'}`} />
				</div>
			</div>
			<div className='md-input-main font-sans text-lg mt-5'>
				<div className='md-input-box relative'>
					<input type='password' ref={passwordRef} id='password' className='md-input w-full text-black' placeholder=' ' onChange={setFirst} required />
					<label className={`md-label absolute pointer-events-none block  ${error ? 'text-red-600' : 'text-darkBlueCust'}`} htmlFor='password'>
						Mot de passe
					</label>
					<div className={`md-input-underline absolute left-0 right-0 pointer-events-none ${error && 'error'}`} />
				</div>
			</div>
			<div className='md-input-main font-sans text-lg mt-5'>
				<div className='md-input-box relative'>
					<input type='password' ref={passwordConfirmRef} id='passwordconfirm' className='md-input w-full text-black' placeholder=' ' onChange={setSecond} required />
					<label className={`md-label absolute pointer-events-none block  ${error ? 'text-red-600' : 'text-darkBlueCust'}`} htmlFor='password-confirm'>
						Confirmer votre mot de passe
					</label>
					<div className={`md-input-underline absolute left-0 right-0 pointer-events-none ${error && 'error'}`} />
				</div>
			</div>
			<div className='mt-5'>
				<Autocomplete fullWidth='true' disablePortal onChange={(event, value) => setFormationName(value?.formation_name)} id='combo-box-demo' options={selectedFormations} sx={{ width: 400 }} renderInput={(params) => <TextField {...params} label='Liste des Formations' variant='standard' color='warning' />} getOptionLabel={(option) => `${option?.formation_name} `} />
			</div>
		</>
	);
};

export default Inputadmin;
