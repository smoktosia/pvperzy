import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Sign from '../molecules/Sign'
import style from './Navigation.module.scss'

const Navigation = () => {
    const [show, setShow] = useState(false)

    const animation = useSpring({
        to: { translateY: show ? 100 : -300 },
        from: { translateY: -300 },
        config: show ? { mass: 1, tension: 100, friction: 8, bounce: 1 } : {},
    })

    return (
        <div className={style.navigation}>
            <animated.div className={style.nav} style={animation}>
                <div className={style.rope}></div>
                <div className={style.rope}></div>
                <Sign text="TEST" />
                <div
                    className={style.button}
                    onClick={() => setShow(!show)}
                ></div>
            </animated.div>
        </div>
    )
}

export default Navigation
