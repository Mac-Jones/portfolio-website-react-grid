import MJLogo from '../../img/mj-logo-primary-transparent.png';
import { resume } from '../../assets';
import './header.styles.scss';

const Header = () => {
	return (
		<header className='header' id='header-section'>
			<img src={MJLogo} alt='Mac Jones Logo' className='header__logo' />

			<h1 className='heading-1'>Mac Jones Soriano</h1>
			<div className='header__paragraph'>Frontend Web Developer</div>
			<div className='header__button-container'>
				<a href={resume} download className='btn header__btn'>
					Download Resume
				</a>
				<a href='#contact' className='btn-transparent header__btn'>
					Let's talk
				</a>
			</div>
		</header>
	);
};

export default Header;
