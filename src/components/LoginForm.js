

function LoginForm({ handleChangeToLogin }) {
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

			<label className="modal-agree">

				<span onClick={() => handleChangeToLogin()}>

					Нет аккаунта? Регистрация
				</span>
			</label>
		</form>
	)
}
export default LoginForm;