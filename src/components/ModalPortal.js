import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function ModalPortal({ isOpen, mode, onClose }) {
	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = prevOverflow;
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return createPortal(
		<ModalContent mode={mode} onClose={onClose} />,
		document.body
	);
}
