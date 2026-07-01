
import { useState } from 'react';

// ВЁРСТКА БЛОКА «ТОП-МАТЧИ ДНЯ» (без логики).
// Авто-прокрутка сделана на чистом CSS (см. .matches__track в index.css):
//   - карточки лежат в ленте .matches__track, которая едет влево по @keyframes;
//   - набор карточек продублирован, поэтому прокрутка зацикливается бесшовно;
//   - при наведении мышкой прокрутка ставится на паузу (тоже чи стый CSS).
//
// Что нужно сделать самому:
//   1. Вынести данные матчей в массив и отрисовать карточки через .map()
//      (тогда дубликат набора можно просто отрендерить вторым проходом).
//   2. Сделать клик по карточке -> переход на страницу матча (react роутер).
//      Сейчас карточка обёрнута в <a href="#"> — это заглушка-ссылка.



const slides = [
	{ id: 0, league: '⚽ Лига чемпионов', time: 'Сегодня 21:45', logo1: 'RM', name1: 'Реал Мадрид', logo2: 'MC', name2: 'Манчестер Сити' },
	{ id: 1, league: '⚽ АПЛ', time: 'Сегодня 22:00', logo1: 'LIV', name1: 'Реал Мадрид', logo2: 'MC', name2: 'Манчестер Сити' },
	{ id: 2, league: '🏀 НБА', time: 'Завтра 03:30', logo1: 'LAL', name1: 'Лейкерс', logo2: 'BOS', name2: 'Селтикс' },
	{ id: 3, league: '🎾 Ролан Гаррос', time: 'Сегодня 18:00', logo1: 'DJ', name1: 'Джокович', logo2: 'AL', name2: 'Алькарас' },
	{ id: 4, league: '🏒 КХЛ', time: 'Сегодня 19:30', logo1: 'CSKA', name1: 'ЦСКА', logo2: 'SKA', name2: 'СКА' },
]

export default function TopMatches() {
	const [offSet, setOffset] = useState[0];

	const slide = slides[offSet]

	return (
		<section className="top-matches">
			<div className="section-head">
				<h2 className="section-title">Топ-матчи дня</h2>
				<span className="section-link">Все события</span>
			</div>

			<div className="matches">
				<div className="matches__track">
					{/* ===== НАБОР 1 ===== */}
					<a href="#" className="match-card">
						<div className="match-card__top">
							<span className="match-card__league">{slide.league}</span>
							<span className="match-card__time">Сегодня 21:45</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">RM</span>
								<span className="team__name1">Реал Мадрид</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">MC</span>
								<span className="team__name2">Манчестер Сити</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">2.10</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">3.40</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">3.05</span></span>
						</div>
					</a>

					<a href="#" className="match-card">
						<div className="match-card__top">
							<span className="match-card__league">⚽ АПЛ</span>
							<span className="match-card__time">Сегодня 22:00</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">LIV</span>
								<span className="team__name1">Ливерпуль</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">ARS</span>
								<span className="team__name2">Арсенал</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">1.95</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">3.60</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">3.80</span></span>
						</div>
					</a>

					<a href="#" className="match-card">
						<div className="match-card__top">
							<span className="match-card__league">🏀 НБА</span>
							<span className="match-card__time">Завтра 03:30</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">LAL</span>
								<span className="team__name1">Лейкерс</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">BOS</span>
								<span className="team__name2">Селтикс</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">1.80</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">15.0</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">2.05</span></span>
						</div>
					</a>

					<a href="#" className="match-card">
						<div className="match-card__top">
							<span className="match-card__league">🎾 Ролан Гаррос</span>
							<span className="match-card__time">Сегодня 18:00</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">DJ</span>
								<span className="team__name1">Джокович</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">AL</span>
								<span className="team__name2">Алькарас</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">2.45</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">—</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">1.55</span></span>
						</div>
					</a>

					<a href="#" className="match-card">
						<div className="match-card__top">
							<span className="match-card__league">🏒 КХЛ</span>
							<span className="match-card__time">Сегодня 19:30</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">CSKA</span>
								<span className="team__name1">ЦСКА</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">SKA</span>
								<span className="team__name2">СКА</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">2.20</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">4.10</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">2.90</span></span>
						</div>
					</a>

					{/* ===== НАБОР 2 — дубликат для бесшовной прокрутки (aria-hidden, чтобы скринридер не читал дважды) ===== */}
					<a href="#" className="match-card" aria-hidden="true" tabIndex={-1}>
						<div className="match-card__top">
							<span className="match-card__league">⚽ Лига чемпионов</span>
							<span className="match-card__time">Сегодня 21:45</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">RM</span>
								<span className="team__name1">Реал Мадрид</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">MC</span>
								<span className="team__name2">Манчестер Сити</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">2.10</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">3.40</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">3.05</span></span>
						</div>
					</a>

					<a href="#" className="match-card" aria-hidden="true" tabIndex={-1}>
						<div className="match-card__top">
							<span className="match-card__league">⚽ АПЛ</span>
							<span className="match-card__time">Сегодня 22:00</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">LIV</span>
								<span className="team__name1">Ливерпуль</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">ARS</span>
								<span className="team__name2">Арсенал</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">1.95</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">3.60</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">3.80</span></span>
						</div>
					</a>

					<a href="#" className="match-card" aria-hidden="true" tabIndex={-1}>
						<div className="match-card__top">
							<span className="match-card__league">🏀 НБА</span>
							<span className="match-card__time">Завтра 03:30</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">LAL</span>
								<span className="team__name1">Лейкерс</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">BOS</span>
								<span className="team__name2">Селтикс</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">1.80</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">15.0</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">2.05</span></span>
						</div>
					</a>

					<a href="#" className="match-card" aria-hidden="true" tabIndex={-1}>
						<div className="match-card__top">
							<span className="match-card__league">🎾 Ролан Гаррос</span>
							<span className="match-card__time">Сегодня 18:00</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">DJ</span>
								<span className="team__name1">Джокович</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">AL</span>
								<span className="team__name2">Алькарас</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">2.45</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">—</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">1.55</span></span>
						</div>
					</a>

					<a href="#" className="match-card" aria-hidden="true" tabIndex={-1}>
						<div className="match-card__top">
							<span className="match-card__league">🏒 КХЛ</span>
							<span className="match-card__time">Сегодня 19:30</span>
						</div>
						<div className="match-card__teams">
							<div className="team">
								<span className="team__logo1">CSKA</span>
								<span className="team__name1">ЦСКА</span>
							</div>
							<span className="match-card__vs">VS</span>
							<div className="team">
								<span className="team__logo2">SKA</span>
								<span className="team__name2">СКА</span>
							</div>
						</div>
						<div className="match-card__odds">
							<span className="odd"><span className="odd__label">П1</span><span className="odd__value">2.20</span></span>
							<span className="odd"><span className="odd__label">X</span><span className="odd__value">4.10</span></span>
							<span className="odd"><span className="odd__label">П2</span><span className="odd__value">2.90</span></span>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}
