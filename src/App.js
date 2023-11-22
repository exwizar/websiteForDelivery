import basket from './image/basket.svg'
import './App.scss';
import menu from './image/main/menu_icon.svg'
import food from './image/main/food_icon.svg'
import delivery from './image/main/delivery_icon.svg'

function App() {
	return (
		<div className="App">
			<div className='header'>
				<div className="navbar">
					<div className='menu'>
						<a href='#' className="menu-logo">
							logo
						</a>
						<div className="b-menu">
							<a href="#" className='link' >О нас</a>
							<a href="#" className='link' >Меню</a>
							<a href="#" className='link'>Контакты</a>
							<div className="circle">
								<img className='backet' src={basket} alt='корзина' />
							</div>
						</div>
					</div>
				</div>

				<div className="aboutUs">
					<div className="container">
						<div className="aboutUs-info">
							<div className="aboutUs-title">
								<h1 className='title'>Обеда на работе - обед как дома</h1>
							</div>
							<div className="aboutUs-text"><p>Бесплатная доставка* вкусных, сытных и полезных обедов по-домашнему в офисы</p></div>
							<div className="aboutUs-btns">
								<a href='#' className="btn-order">Заказать звонок</a>
								<a href='#' className="btn-menu">Меню</a>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div className="main">
				<div className="advantages">
					<div className="container">
						<div className="advantages-heading">
							<h2 className='advantages-title'>Почему мы?</h2>
						</div>
						<div className="advatage-info">
							<div className="advantages-block">
								<img src={menu} alt='menu_logo' />
								<div className="advantages-block__title">Новое меню каждый день</div>
								<div className="advantages-block__content">Каждый день мы составляем для вас меню из разных блюд</div>
							</div>

							<div className="advantages-block">
								<img src={food} alt='food_icon' />
								<div className="advantages-block__title">Качественные продукты</div>
								<div className="advantages-block__content">Для приготовления обедов мы используем только качественные продукты</div>
							</div>

							<div className="advantages-block">
								<img src={delivery} alt='delivery_icon' />
								<div className="advantages-block__title">Бесплатная доставка</div>
								<div className="advantages-block__content">Бесплатная доставка при заказе от XXX рублей</div>
							</div>
						</div>
					</div>
				</div>
				<div className="menu">
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
					<div>fksdjlfslkfj</div>
				</div>
			</div>

			<div className="footer">
				<a href='#' className="menu-logo">
					logo
				</a>
				<div>Tel: 4823849273</div>
			</div>
		</div>
	);
}

export default App;
