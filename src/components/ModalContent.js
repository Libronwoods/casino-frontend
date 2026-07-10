

export default function ModalContent({ children, onClose }) {
	return (
		<div className="modal-overlay">
			<div className="modal-card" role="dialog" aria-modal="true">
				<button
					type="button"
					className="modal-close"
					aria-label="Закрыть"
					onClick={onClose}
				>
					×
				</button>

				{children}
			</div>
		</div>
	);
}

// контент модального окна