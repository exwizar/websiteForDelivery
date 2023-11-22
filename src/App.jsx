import basket from './image/basket.svg'
import shevron from './image/shevron.svg'
import './App.scss';
import menu from './image/main/menu_icon.svg'
import food from './image/main/food_icon.svg'
import delivery from './image/main/delivery_icon.svg'
import OrderBtn from './components/UI/button/order';

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
							<a href="#menu" className='link' >Меню</a>
							<a href="#footer" className='link'>Контакты</a>
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
								<OrderBtn />
								<a href='#menu' className="btn-menu">Меню</a>
							</div>
						</div>
					</div>

				</div>
				<div className='button-bottom'>
					<a className='shevron' href="#main" alt><img className='shevron-ico' src={shevron} alt="" /></a>
				</div>
			</div>
			<div id='main' className="main">
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
				<div id='menu' className="menu">

				</div>
			</div>

			<div id='footer' className="footer">
				<div className="container">
					<div className="footer-content">
						<div className="content-map">
							<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A19daac01e2dd2036006603a5f5589a23bdd4ac6f478c0a2cefdbfaaaac48a62f&amp;source=constructor" width="658" height="495" frameborder="0"></iframe>
						</div>
						<div className="footer-info">
							<div className="footer-contact">
								<div className="contact-numbers">
									<div>Время работы:</div>
									<div>С 10:00 до 22:00</div>
								</div>

								<div className="contact-social">

								</div>
							</div>
							<div className="footer-logo">
								<a href="" className="info-logo">LOGO</a>
							</div>
							<p>*Бесплатная доставка при заказе от ХХХ рублей</p>
						</div>
					</div>

				</div>
				<div className="copyright">
					сopyright © dushes 2021
				</div>
			</div>
		</div>
	);
}

export default App;
