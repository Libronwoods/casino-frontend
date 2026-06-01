import { useState } from "react";

export default function ModalContent({ isOpen, onClose }) {

	const [activeTab, setActiveTab] = useState('register');
	const [isOver21, setIsOver21] = useState(false);


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

				< div className="modal-tabs">
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
					<form className="modal-form">
						<label className="modal-field">
							<span>Email</span>
							<input
								type="email"
								name="email"
								placeholder="you@example.com"
							/>
						</label>

						<label className="modal-field">
							<span>Пароль</span>
							<input
								type="password"
								name="password"
								placeholder="••••••••"
							/>
						</label>

						<label className="modal-agree">
							<input type="checkbox"
								name="agree" />
							<span>Согласен с правилами и политикой конфиденциальности</span>
						</label>

						<button type="submit" className="modal-submit">
							Войти
						</button>
					</form>
				)}
				{activeTab === 'register' && (
					<form className="modal-form">
						<label className="modal-field">
							<span>Email</span>
							<input
								type="email"
								name="email"
								placeholder="you@example.com"
							/>
						</label>

						<label className="modal-field">
							<span>Пароль</span>
							<input
								type="password"
								name="password"
								placeholder="••••••••"
							/>
						</label>

						<label className="modal-field">
							<span>Повторите пароль</span>
							<input
								type="password"
								name="passwordRepeat"
								placeholder="••••••••"
							/>
						</label>

						<label className="modal-agree">
							<input
								type="checkbox"
								name="agree"
								checked={isOver21}
								onChange={(e) => setIsOver21(e.target.checked)}
							/>
							<span> Мне больше 21 года. Я согласен с правилами и приемом ставок </span>
						</label>

						<button type="submit"
							className="modal-submit"
							disabled={!isOver21}>
							Зарегистрироваться
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
