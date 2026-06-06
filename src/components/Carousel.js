import centr from '../img/centr.jpg';
import centr2 from '../img/centr2.jpg';
import centr3 from '../img/centr3.jpg';
import centr5 from '../img/centr5.jpg';

// ВЁРСТКА БАННЕРА-КАРУСЕЛИ (без логики).
// Что нужно сделать самому:
//   1. Автопрокрутку слайдов (например, через useState + useEffect/setInterval).
//   2. Обработчики на стрелки .carousel__arrow (листать вперёд/назад).
//   3. Показывать только активный слайд + подсвечивать активную точку .carousel__dot.
// Сейчас все слайды лежат рядом в .carousel__track — это просто разметка.

export default function Carousel() {
	return (
		<section className="carousel">
			{/* Стрелка влево */}
			<button type="button" className="carousel__arrow carousel__arrow--prev" aria-label="Назад">
				&#10094;
			</button>

			{/* Лента слайдов */}
			<div className="carousel__track">
				<div className="carousel__slide" style={{ backgroundImage: `url(${centr})` }}>
					<div className="carousel__caption">
						<span className="carousel__tag">Бонус</span>
						<h2 className="carousel__title">Приветственный бонус до 100 BYN</h2>
						<p className="carousel__text">+ 300 фриспинов для новых клиентов</p>
						<button type="button" className="carousel__cta">Получить бонус</button>
					</div>
				</div>

				<div className="carousel__slide" style={{ backgroundImage: `url(${centr2})` }}>
					<div className="carousel__caption">
						<span className="carousel__tag">Промо</span>
						<h2 className="carousel__title">Кэшбэк 10% каждую неделю</h2>
						<p className="carousel__text">Возвращаем часть проигрыша по понедельникам</p>
						<button type="button" className="carousel__cta">Подробнее</button>
					</div>
				</div>

				<div className="carousel__slide" style={{ backgroundImage: `url(${centr3})` }}>
					<div className="carousel__caption">
						<span className="carousel__tag">Спорт</span>
						<h2 className="carousel__title">Экспресс дня с бустом +15%</h2>
						<p className="carousel__text">Увеличенный коэффициент на топовые события</p>
						<button type="button" className="carousel__cta">Сделать ставку</button>
					</div>
				</div>

				<div className="carousel__slide" style={{ backgroundImage: `url(${centr5})` }}>
					<div className="carousel__caption">
						<span className="carousel__tag">Турнир</span>
						<h2 className="carousel__title">Призовой фонд 50 000 BYN</h2>
						<p className="carousel__text">Играй в слоты и поднимайся в таблице лидеров</p>
						<button type="button" className="carousel__cta">Участвовать</button>
					</div>
				</div>
			</div>

			{/* Стрелка вправо */}
			<button type="button" className="carousel__arrow carousel__arrow--next" aria-label="Вперёд">
				&#10095;
			</button>

			{/* Точки-индикаторы (по числу слайдов) */}
			<div className="carousel__dots">
				<span className="carousel__dot carousel__dot--active"></span>
				<span className="carousel__dot"></span>
				<span className="carousel__dot"></span>
				<span className="carousel__dot"></span>
			</div>
		</section>
	);
}
