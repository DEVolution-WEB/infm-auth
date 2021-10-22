import React from 'react';
import { useGlobalContext } from '../../context';
import '../../assets/css/Modal.css';

const Modal = ({ id, handleDeleteUsers }) => {
	const { modal, setModal } = useGlobalContext();

	return (
		<div className={`modal-screen ${modal && 'open'}`}>
			<div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
				<h2
					className='text-2xl font-medium text-primary mt-4 mb-10
				 text-center'>
					Confirmer la Suppression
				</h2>
				<div className='flex justify-around items-center mt-6'>
					<button
						disabled={!modal}
						onClick={() => {
							handleDeleteUsers(id);
							setModal(!modal);
						}}
						className='bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:text-yellowCust'>
						oui
					</button>
					<button onClick={() => setModal(!modal)} className='bg-darkBlueCust mt-3 py-2 px-4 text-sm text-white rounded border border-blue-light focus:outline-none focus:border-primary hover:text-yellowCust'>
						non
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
