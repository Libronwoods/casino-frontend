
import { useState } from 'react';
import ModalPortal from './ModalPortal';


export default function Header() {

	const [isOpen, setIsOpen] = useState(false);

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
					<li className="login">Войти</li>
					<li className="login">
						<button className="register-btn" onClick={handleOpenModal}>Регистрация</button>
						{modalOpen ? <div className={`popup ${modalOpen ? 'open' : ''}`} id="popup">
							<div className="popup__content">
								<button
									type="button"
									className="popup__close"
									onClick={handleCloseModal}
								>
									<span></span>
								</button>
								<h2 className="popup__title">Simple Modal</h2>
								<p className="popup__text">
									Закрыть модальное окно по клику на крестик
								</p>
							</div>
						</div> : null}
					</li>
				</ul>
				<ModalPortal isOpen={isOpen} onClose={() => setIsOpen(false)} />
			</div>
		</header>
	);
}
