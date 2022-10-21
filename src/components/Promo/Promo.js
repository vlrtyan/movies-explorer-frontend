import './Promo.css';
import { Link } from 'react-router-dom';
import promoImage from '../../images/promo-image.svg';
import logo from '../../images/logo.svg';


function promo () {
    return(
        <div className='promo'>
            <div className='promo__header'>
                <img className='logo' src={logo} alt='Буква С'/>
                <Link className='promo__signup-button' to='/signup'>Регистрация</Link>
                <Link className='promo__singnin-button' to='/signin'>Войти</Link>
            </div>
            <h1 className='promo__title'>Учебный проект студентки факультета Веб&#8209;разработки.</h1>
            <img className='promo__image' src={promoImage} alt='Спираль'/>
        </div>
    )
}

export default promo