import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button className="register-btn" onClick={() => setShowModal(true)}>
				Регистрация
			</button>
			{showModal && createPortal(
				<ModalContent onClose={() => setShowModal(false)} />,
				document.body
			)}
		</div>
	);
}