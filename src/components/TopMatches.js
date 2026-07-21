

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
// 2.


const slides = [
	{
		id: 0, league: '⚽ Лига чемпионов', time: 'Сегодня 21:45', logo1: 'RM', name1: 'Реал Мадрид', logo2: 'MC', name2: 'Манчестер Сити',
		odds: [{ label: 'П1', value: '2.10' }, { label: 'X', value: '3.40' }, { label: 'П2', value: '3.05' }]
	},
	{
		id: 1, league: '⚽ АПЛ', time: 'Сегодня 22:00', logo1: 'LIV', name1: 'Реал Мадрид', logo2: 'MC', name2: 'Манчестер Сити',
		odds: [{ label: 'П1', value: '1.95' }, { label: 'X', value: '3.60' }, { label: 'П2', value: '3.80' }]
	},
	{
		id: 2, league: '🏀 НБА', time: 'Завтра 03:30', logo1: 'LAL', name1: 'Лейкерс', logo2: 'BOS', name2: 'Селтикс',
		odds: [{ label: 'П1', value: '1.80' }, { label: 'X', value: '15.0' }, { label: 'П2', value: '2.05' }]
	},
	{
		id: 3, league: '🎾 Ролан Гаррос', time: 'Сегодня 18:00', logo1: 'DJ', name1: 'Джокович', logo2: 'AL', name2: 'Алькарас',
		odds: [{ label: 'П1', value: '2.45' }, { label: 'X', value: '—' }, { label: 'П2', value: '1.55' }]
	},
	{
		id: 4, league: '🏒 КХЛ', time: 'Сегодня 19:30', logo1: 'CSKA', name1: 'ЦСКА', logo2: 'SKA', name2: 'СКА',
		odds: [{ label: 'П1', value: '2.20' }, { label: 'X', value: '4.10' }, { label: 'П2', value: '2.90' }]
	},
]

export default function TopMatches() {
	return (
		<section className="top-matches">
			<div className="section-head">
				<h2 className="section-title">Топ-матчи дня</h2>
				<span className="section-link">Все события</span>
			</div>

			<div className="matches">
				<div className="matches__track">
					{/* ===== НАБОР 1 ===== */}
					{slides.map((slide, index) => (
						<a key={slide.id} href="#" className="match-card">
							<div className="match-card__top">
								<span className="match-card__league">{slide.league}</span>
								<span className="match-card__time">{slide.time}</span>
							</div>
							<div className="match-card__teams">
								<div className="team">
									<span className="team__logo1">{slide.logo1}</span>
									<span className="team__name1">{slide.name1}</span>
								</div>
								<span className="match-card__vs">VS</span>
								<div className="team">
									<span className="team__logo2">{slide.logo2}</span>
									<span className="team__name2">{slide.name2}</span>
								</div>
							</div>
							<div className="match-card__odds">
								{slide.odds.map((odds, indexOdd) => (
									<div>
										<span key={odds.id} className="odd">
											<span className="odd__label">{odds.label}</span>
											<span className="odd__value">{odds.value}</span>
										</span>

									</div>
								))}
							</div>
						</a>
					))}

					{/* ===== НАБОР 2 — дубликат для бесшовной прокрутки (aria-hidden, чтобы скринридер не читал дважды) ===== */}
					{slides.map((slide, index) => (
						<a key={slide.id} href="#" className="match-card" aria-hidden="true" tabIndex={-1}>
							<div className="match-card__top">
								<span className="match-card__league">{slide.league}</span>
								<span className="match-card__time">{slide.time}</span>
							</div>
							<div className="match-card__teams">
								<div className="team">
									<span className="team__logo1">{slide.logo1}</span>
									<span className="team__name1">{slide.name1}</span>
								</div>
								<span className="match-card__vs">VS</span>
								<div className="team">
									<span className="team__logo2">{slide.logo2}</span>
									<span className="team__name2">{slide.name2}</span>
								</div>
							</div>
							<div className="match-card__odds">
								{slide.odds.map((odds, indexOdd) => (
									<div>
										<span key={odds.id} className="odd">
											<span className="odd__label">{odds.label}</span>
											<span className="odd__value">{odds.value}</span>
										</span>
									</div>
								))}
							</div>
						</a>
					))}
				</div>
			</div>
		</section >
	);
}
