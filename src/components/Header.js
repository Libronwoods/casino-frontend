
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
						<button className="register-btn" onClick={() => setIsOpen(true)}>
							Регистрация
						</button>
					</li>
				</ul>
				<ModalPortal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<p>Какой-то текст </p>
				</ModalPortal>
			</div>
			<div className="presentation"></div>
		</header>
	);
}
