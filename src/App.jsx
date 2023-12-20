import basket from './image/basket.svg'
import shevron from './image/shevron.svg'
import prev from './image/prev.svg'
import next from './image/next.svg'
import './styles/App.scss';
import './styles/AppMedia.scss'
import menu from './image/main/menu_icon.svg'
import food from './image/main/food_icon.svg'
import delivery from './image/main/delivery_icon.svg'
import OrderBtn from './components/UI/button/order';
import { useState, useEffect, useRef, useCallback } from 'react';
import Modal from './components/modal/Modal.jsx';


function App() {
	const menuCall = 'Заказать звонок';
	const [nav, setNav] = useState(false);
	const [btns, setBtns] = useState([])
	const [menuInfo, setMenuInfo] = useState([])
	const [current, setCurrent] = useState(null);
	const [modalActive, setModalActive] = useState(false)
	
	const [scrollPosition, setScrollPosition] = useState(0);
	const containerRef = useRef();

	//Move menu

    const handleMouseDown = useCallback(e => {
        const ele = containerRef.current;
        if (!ele) {
            return;
        }
        const startPos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        const handleMouseMove = e => {
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            ele.scrollTop = startPos.top - dy;
            ele.scrollLeft = startPos.left - dx;
            updateCursor(ele);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            resetCursor(ele);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, []);

    const handleTouchStart = useCallback(e => {
        const ele = containerRef.current;
        if (!ele) {
            return;
        }
        const touch = e.touches[0];
        const startPos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: touch.clientX,
            y: touch.clientY,
        };

        const handleTouchMove = e => {
            const touch = e.touches[0];
            const dx = touch.clientX - startPos.x;
            const dy = touch.clientY - startPos.y;
            ele.scrollTop = startPos.top - dy;
            ele.scrollLeft = startPos.left - dx;
            updateCursor(ele);
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            resetCursor(ele);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    }, []);

    const updateCursor = (ele) => {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';
    };

    const resetCursor = (ele) => {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
    };

	//craete menu

	async function createMenu(key) {
		setCurrent(key)
		setMenuInfo([])
		await fetch(`http://admin/api/?param=${key}`)
			.then(res => res.json())
			.then(res => setMenuInfo(res.menu))
			.catch(res => {
                <div>Ошибка</div>
            })
	}

	//create btns

	async function createBtns() {
		setBtns([])

		for (let i = 0; i <= 9 ; i++) {
			await fetch(`http://admin/api/?param=${i}`)
				.then(res => res.json())
				.then(res => setBtns((btns) => ([...btns, res.name])))
				.catch(res => {
					<div>Ошибка</div>
				})
		}
	}

	// scroll onClick

	const scroll = (scrollOffset) => {
		containerRef.current.scrollLeft += scrollOffset;
	  };

	useEffect(() => {
		createBtns()
		createMenu(0)
	  },  []);


	return (
		<div className="App">
			<Modal active={modalActive} setActive={setModalActive}/>
			<div className='header'>
				<div className="navbar">
					<div className={nav ? 'menu active' : 'menu'}>
						<a href='#' className="menu-logo">
							logo
						</a>
						<div className="b-menu">
							<a onClick={() => setNav(false)} href="#main" className='link' >О нас</a>
							<a onClick={() => setNav(false)} href="#menu" className='link' >Меню</a>
							<a onClick={() => setNav(false)} href="#footer" className='link'>Контакты</a>
							<div className="circle">
								<img className='backet' src={basket} alt='корзина' onClick={() => setModalActive(true)} />
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
				<div id = 'menu' className="cardProduct">                                     	
					<div className="container cats-container" >
						<img className='cats-tab' onClick={() =>scroll(-300)} style={{ 'height': '50px'}} src={prev} alt='next' />
						<div ref={containerRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} className="cats-block">
							{btns.map((item, index) => {
								return (
									<div className="cats-btns">
										<button className={index === current ? 'catlink active' : 'catlink'} onClick={() => createMenu(index)} key={index}>{item}</button>
									</div>
								)
							})}
						</div>
						<img className='cats-tab' onClick={() =>scroll(300)} style={{ 'height': '50px' }} src={next} alt='next' />
					</div>

					<div className="menuInfo">
						<div className="container">
							<div className="menuInfo-block">

							{menuInfo.length === 0 ?
								<div style={{ 'height': '100vh' }}>Идёт загрузка...</div>
								:
								menuInfo.map(item => {
									return (
										<div className="cardProduct-block">
											<div className="cardProduct-img">
												<div className="prewive">
												<div className="prewive-icon"></div>
													<div className='prewive-title'>Узнать подробнее</div>
												</div>
												<img src={item.pic} alt="img" />
											</div>
											<div className="cardProduct-info">
												<div className="feature-weight">{item.weight} г.</div>
											

												<div className='catProduct-name'>{item.name}</div>
												<div className="qty-block">
													<p className='feature-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, modi blanditiis. Eos fuga totam assumenda hic autem quisquam alias omnis vitae saepe.</p>
												</div>
												<div className="catProduct-pay">
													<div className="catProduct-description">{item.price} ₽</div>
													<button className="catProduct-btn">+ Добавить</button>
												</div>
											</div>

										</div>
									)
								})
							}
							</div>
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
