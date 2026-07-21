
import { useState } from 'react';
import ModalPortal from './ModalPortal';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function Header() {

	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState('register');
	const [isOver21, setIsOver21] = useState(false);

	const handleCloseModal = () => {
		setIsOpen(false)
	}
	const handleOpenModal = () => {
		setIsOpen(true)
	}

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
					<button className="login" onClick={handleOpenModal}>Войти</button>
					<li className="login">
						<button className="register-btn" onClick={handleOpenModal}>Регистрация</button>
						{isOpen ? <div className={`popup ${isOpen ? 'open' : ''}`} id="popup">
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
				<ModalPortal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<div className="modal-tabs">
						<button type="button"
							className={`modal-tab ${activeTab === 'login' ? 'active' : ''}`}
							onClick={() => setActiveTab('login')}
						>
							Вход
						</button>
						<button type="button"
							className={`modal-tab ${activeTab === 'register' ? 'active' : ''}`}
							onClick={() => setActiveTab('register')}>
							Регистрация
						</button>

					</div>

					{activeTab === 'login' && (
						<LoginForm
							handleChangeToLogin={() => setActiveTab('register')}
						/>
					)}
					{activeTab === 'register' && (
						<RegisterForm
							isOver21={isOver21}
							setIsOver21={setIsOver21} />
					)}
				</ModalPortal>
			</div>
		</header >
	);
}
