import PortalExample from "./ModalPortal"


export default function Header() {
	return (
		<header>
			<div>
				<span className="logo">Ludoman's Paridase</span>
				<ul className="nav">
					<li>Спорт</li>
					<li>Лайф</li>
					<li>Казино</li>
					<li>Live-казино</li>
					<select className="language-select">
						<option value="RU">RU</option>
						<option value="EN">EN</option>
					</select>
					<li>Войти</li>
					<li className="login">
						<PortalExample />
					</li>
				</ul>
			</div>
			<div className='presentation'></div>
		</header>
	);
}



// const Portal = (props) => {
// 	const node = document.createElement('div');
// 	document.body.appendChild(node)

// 	return ReactDOM.createPortal(props.children, node);
// }
// const Main = () => {

// 	return (
// 		<div className="popup__content">
// 			<button
// 				type="button"
// 				className="popup__close"
// 				onClick={handleCloseModal}
// 			>
// 				<span></span>
// 			</button>
// 			<h2 className="popup__title">Simple Modal</h2>
// 			<p className="popup__text">
// 				Закрыть модальное окно по клику на крестик
// 			</p>
// 		</div>
// 	)
// }