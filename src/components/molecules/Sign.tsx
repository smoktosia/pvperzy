import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import style from './Sign.module.scss'

import img_TEST from '~/res/img/sign.png'
const images = {
    img_TEST,
}

type signText = 'TEST'

const Sign = ({
    text,
    to = '#',
    alt = '',
}: {
    text: signText
    to?: string
    alt?: string
}) => {
    return (
        <div>
            <Link to={to}>
                <img
                    className={style.img}
                    src={images[`img_${text}`]}
                    alt={alt}
                />
            </Link>
        </div>
    )
}

Sign.propTypes = {
    text: PropTypes.oneOf(['TEST']),
    to: PropTypes.string,
    alt: PropTypes.string,
}

export default Sign
