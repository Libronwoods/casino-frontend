
export default function ModalContent({ onClose }) {
	return (
		<div className="popup_content">
			<div></div>
			<button className="close" onClick={onClose}>Close</button>
			<h2 className="popup__title">Регистрация</h2>
			<p className="popup__text">
				Заполните форму ниже
			</p>
			<span></span>
		</div>
	);
}
