import React from "react"

function RegisterForm({ isOver21, setIsOver21 }) {
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
	)
}

export default RegisterForm;