import basket from './image/basket.svg'
import shevron from './image/shevron.svg'
import './styles/App.scss';
import './styles/AppMedia.scss'
import menu from './image/main/menu_icon.svg'
import food from './image/main/food_icon.svg'
import delivery from './image/main/delivery_icon.svg'
import OrderBtn from './components/UI/button/order';
import { useState, useEffect, useRef } from 'react';


function App() {
	const menuCall = 'Заказать звонок';
	const [nav, setNav] = useState(false);
	const [btns, setBtns] = useState([])
	const [menuInfo, setMenuInfo] = useState([])
	const [current, setCurrent] = useState(null);

	const [scrollPosition, setScrollPosition] = useState(0);
	const containerRef = useRef();

	console.log(scrollPosition)
  
	async function createMenu(key) {
		setCurrent(key)
		setMenuInfo([])
		await fetch(`http://admin/api/?param=${key}`)
			.then(res => res.json())
			.then(res => setMenuInfo(res.menu))
	}


	async function createBtns() {
		setBtns([])
		for (let i = 0; i <= 9; i++) {
			await fetch(`http://admin/api/?param=${i}`)
				.then(res => res.json())
				.then(res => setBtns((btns) => ([...btns, res.name])))
		}
	}

	const handleScrollLeft = (scrollAmount) => {
		if(scrollPosition <= 0) {
			return setScrollPosition(0)
		}
		const newScrollPosition = scrollPosition + scrollAmount;
	  
		setScrollPosition(newScrollPosition);
	  
		containerRef.current.scrollLeft = newScrollPosition;
		
	  };

	  const handleScrollRight = (scrollAmount) => {
		if(scrollPosition >= 800) {
			return setScrollPosition(800)
		}
		const newScrollPosition = scrollPosition + scrollAmount;
	  
		setScrollPosition(newScrollPosition);
	  
		containerRef.current.scrollLeft = newScrollPosition;
		
	  };

	useEffect(() => {
		createBtns()
		createMenu(0)
	}, []);


	return (
		<div className="App">
			<div className='header'>
				<div className="navbar">
					<div className={nav ? 'menu active' : 'menu'}>
						<a href='#' className="menu-logo">
							logo
						</a>
						<div className="b-menu">
							<a onClick={() => setNav(false)} href="#" className='link' >О нас</a>
							<a onClick={() => setNav(false)} href="#menu" className='link' >Меню</a>
							<a onClick={() => setNav(false)} href="#footer" className='link'>Контакты</a>
							<div className="circle">
								<img className='backet' src={basket} alt='корзина' />
							</div>
						</div>
					</div>
				</div>
				<div onClick={() => setNav(!nav)} className="burger-menu">Menu</div>

				<div className="aboutUs">
					<div className="container">
						<div className="aboutUs-info">
							<div className="aboutUs-title">
								<h1 className='title'>Обеда на работе - обед как дома</h1>
							</div>
							<div className="aboutUs-text"><p>Бесплатная доставка* вкусных, сытных и полезных обедов по-домашнему в офисы</p></div>
							<div className="aboutUs-btns">
								<OrderBtn heading={menuCall} />
								<a href='#menu' className="btn-menu">Меню</a>
							</div>
						</div>
					</div>

				</div>
				<div className='button-bottom'>
					<a className='shevron' href="#main" ><img className='shevron-ico' src={shevron} alt="shevron" /></a>
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
				<div className="cardProduct">
					<div className="container cats-container" >
						<button onClick={() => handleScrollLeft(-200)}>back</button>
						<div className="cats-block" ref={containerRef}>
							{btns.map((item, index) => {
								return (
									<div className="cats-btns">
										<button className={index === current ? 'catlink active' : 'catlink'} onClick={() => createMenu(index)} key={index}>{item}</button>
									</div>
								)
							})}
						</div>
							<button onClick={() => handleScrollRight(200)}>next</button>
					</div>

					<div className="manuInfo-block">
						<div className="container">

							{menuInfo.length <= 0 ?
								<div style={{ 'height': '100vh' }}>Идёт загрузка...</div>
								:
								menuInfo.map(item => {
									return (
										<div className="cardProduct-block">
											<div className="cardProduct-img">
												<img src={item.pic} alt="img" />
											</div>
											<div className="qty-block">
												<div className="feature-weight">{item.weight} г.</div>
											</div>

											<div className='catProduct-name'>{item.name}</div>
											<div className="catProduct-pay">
												<div className="catProduct-description">{item.price}</div>
												<button className="catProduct-btn">Добавить</button>
											</div>

										</div>
									)
								})
							}
						</div>
					</div>

				</div>
			</div>

			<div id='footer' className="footer">
				<div className="container">
					<div className="footer-content">
						<div className="content-map">
							<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A19daac01e2dd2036006603a5f5589a23bdd4ac6f478c0a2cefdbfaaaac48a62f&amp;source=constructor" width="600" height="400" ></iframe>
						</div>

						<div className="location">
							<div className="location-title"><h2>Наши контакты</h2></div>

							<div className="location-info">
								<h3 className='address-title'>Адрес</h3>
								<div className='address-info'>Приморский край, г. Владивосток, ул. Гоголя 5</div>
							</div>

							<div className="location-info">
								<h3 className='address-title'>Время работы</h3>
								<div className='address-info'>Ежедневно с 12:00 до 23:00</div>
							</div>

							<div className="location-info">
								<h3 className='address-title'>Телефон</h3>
								<a className='address-info' href="tel:+79001111111" alt='number'>+7(951) 312-12-42</a>
							</div>


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
