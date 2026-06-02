
function LoginForm() {
	return (

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
	)
}
export default LoginForm;