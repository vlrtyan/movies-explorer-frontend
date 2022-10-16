import './Promo.css';
import { Link } from 'react-router-dom';
import promoImage from '../../../images/promo-image.svg';
import logo from '../../../images/logo.svg';


function promo () {
    return(
        <div className='promo'>
            <div className='promo__header'>
                <img className='logo' src={logo} alt='Буква С'/>
                <Link className='promo__signup-button' to=''>Регистрация</Link>
                <Link className='promo__singnin-button' to=''>Войти</Link>
            </div>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <img className='promo__image' src={promoImage} alt=''/>
        </div>
    )
}

export default promo