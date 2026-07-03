import centr from '../img/centr.jpg';
import centr2 from '../img/centr2.jpg';
import centr3 from '../img/centr3.jpg';
import centr5 from '../img/centr5.jpg';
import { useState } from 'react';

// ВЁРСТКА БАННЕРА-КАРУСЕЛИ (без логики).
// Что нужно сделать самому:
//   1. Автопрокрутку слайдов (например, через useState + useEffect/setInterval).
//   2. Обработчики на стрелки .carousel__arrow (листать вперёд/назад).
//   3. Показывать только активный слайд + подсвечивать активную точку .carousel__dot.
// Сейчас все слайды лежат рядом в .carousel__track — это просто разметка.

const slides = [
	{ id: 0, img: centr, tag: 'Бонус', title: 'Приветственный бонус до 100 BYN', text: '+ 300 фриспинов для новых клиентов', cta: 'Получить бонус' },
	{ id: 1, img: centr2, tag: 'Промо', title: 'Кэшбэк 10% каждую неделю', text: 'Возвращаем часть проигрыша по понедельникам', cta: 'Подробнее' },
	{ id: 2, img: centr3, tag: 'Спорт', title: 'Экспресс дня с бустом +15%', text: 'Увеличенный коэффициент на топовые события', cta: 'Сделать ставку' },
	{ id: 3, img: centr5, tag: 'Турнир', title: 'Призовой фонд 50 000 BYN', text: 'Играй в слоты и поднимайся в таблице лидеров', cta: 'Участвовать' },
];

export default function Carousel() {



	const [offset, setOffset] = useState(0)

	const slide = slides[offset]

	const HandleLeftArroyClick = () => {
		setOffset(prev => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const HandleRightArroyClick = () => {
		setOffset(prev => {
			if (prev === slides.length - 1) {
				return 0;
			} else {
				return prev + 1;
			}
		})
	}

	const HandleDotClick = (id) => {
		setOffset(id);
	};

	return (
		<section className="carousel">
			{/* Стрелка влево */}
			<button type="button"
				className="carousel__arrow carousel__arrow--prev"
				onClick={HandleLeftArroyClick}
				aria-label="Назад">
				&#10094;
			</button>

			{/* Лента слайдов */}
			<div className="carousel__track">
				<div
					className="carousel__slide"
					style={{ backgroundImage: `url(${slide.img})` }}>
					<div className="carousel__caption">
						<span className="carousel__tag">{slide.tag}</span>
						<h2 className="carousel__title">{slide.title}</h2>
						<p className="carousel__text">{slide.text}</p>
						<button type="button" className="carousel__cta">{slide.cta}</button>
					</div>
				</div>
			</div>

			{/* Стрелка вправо */}
			<button type="button" className="carousel__arrow carousel__arrow--next"
				onClick={HandleRightArroyClick}
				aria-label="Вперёд">
				&#10095;
			</button>

			{/* Точки-индикаторы (по числу слайдов) */}

			<div className="carousel__dots">
				{slides.map((slideItem, id) =>
					<span
						onClick={() => HandleDotClick(id)}
						key={id}
						className={`carousel__dot ${id === offset ? "carousel__dot--active" : " "}`}>
					</span>
				)}
			</div>
		</section >
	);
}
