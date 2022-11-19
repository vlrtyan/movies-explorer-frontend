import validator from 'validator';

const nameSymbols = /^[a-zA-Zа-яёА-ЯЁ\s-]+$/;

export const validation = (name, value) => {
    if (name === 'name') {
        if (!value) {
            return 'Поле не может быть пустым'
        }
        else if (!nameSymbols.test(value)) {
            return 'Имя содержит недопустимые символы'
        }
    } else if (name === 'email') {
        if (!value) {
            return 'Поле не может быть пустым'
        }
        else if (!validator.isEmail(value.toLowerCase())) {
            return 'Некорректный e-mail'
        }
    } else if (name === 'password') {
        if (!value) {
            return 'Поле не может быть пустым'
        }
        else if (!value || value.length < 6) {
            return 'Пароль должен содержать не менее 6 символов'
        }
    }
    else if (name === 'search') {
        if (!value) {
            return 'Поле не может быть пустым'
        }
    }
}