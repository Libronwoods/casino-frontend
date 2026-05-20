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
					<li className="login">Войти</li>
					<li className="login">
						<button className="register-btn">
							Регистрация
						</button>
					</li>
				</ul>
			</div>
			<div className="presentation"></div>
		</header>
	);
}
