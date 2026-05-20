export default function ModalContent() {
	return (
		<div className="modal-overlay">
			<div className="modal-card" role="dialog" aria-modal="true">
				<button
					type="button"
					className="modal-close"
					aria-label="Закрыть"
				>
					×
				</button>

				<div className="modal-tabs">
					<button type="button" className="modal-tab active">
						Вход
					</button>
					<button type="button" className="modal-tab">
						Регистрация
					</button>
				</div>

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
						<input type="checkbox" name="agree" />
						<span>Согласен с правилами и политикой конфиденциальности</span>
					</label>

					<button type="submit" className="modal-submit">
						Войти
					</button>
				</form>
			</div>
		</div>
	);
}
