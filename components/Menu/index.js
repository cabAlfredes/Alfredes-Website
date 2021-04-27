import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTrail, useTransition, animated, config } from 'react-spring';
import { useStateContext, useStateDispatch } from '@/store/store';
import { useMatchMedia } from '@/utils/useMatchMedia';
import styles from './Menu.module.scss';

const MenuItemAnimated = ({ children, style, onClick }) => {
  return <animated.li style={style} onClick={onClick} >{children}</animated.li>
}

const items = [
  <Link href="/">
    <a>Home</a>
  </Link>,
  <a
    href="/#about"
    onClick={(e) => {
      e.preventDefault(); // prevent the page to move to top if click more than once the link
      window.location = '/#about';
    }}
  >
    La Cabana
</a>,
  <a
    href="/#services"
    onClick={(e) => {
      e.preventDefault(); // prevent the page to move to top if click more than once the link
      window.location = '/#services';
    }}
  >
    Servicios
   </a>,
  <Link href="/gallery">
    <a>Fotos</a>
  </Link>,
  <Link href="/map">
    <a>Como Llegar</a>
  </Link>,
  <Link href="/contact">
    <a>Contacto</a>
  </Link>

]

const Menu = () => {
  const { showMenu } = useStateContext();
  const dispatch = useStateDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = items.map((item) => {
    return item
  })

  const [trail, apiTrail] = useTrail(menuItems.length, (item) => ({
    opacity: 1, transform: 'translateY(0px)',
  }))

  const transitions = useTransition(isVisible, {
    from: { x: 0, y: -100, opacity: 0, visibility: 'hidden' },
    enter: { x: 0, y: 1, opacity: 1, visibility: 'visible' },
    leave: { x: 0, y: -100, opacity: 0 },
    reverse: isVisible,
    // delay: 200,
    config: config.stiff,
  })

  const isMobile = useMatchMedia('(max-width: 860px)');
  const isBigScreen = useMatchMedia('(min-width: 860px)');

  useEffect(() => {
    
    apiTrail.start(showMenu ?
      { opacity: 1, transform: 'translateY(0px)', delay: 80, } :
      { opacity: 0, transform: 'translateY(-100px)', delay: 0, });
    apiTrail.start(isBigScreen && { opacity: 1, transform: 'translateY(0px)', delay: 0, })
  }, [showMenu, isBigScreen])

  useEffect(() => {
    if (isBigScreen) {
      setIsVisible(true)
    }
    if (isMobile && !showMenu) {
      setIsVisible(false)
    }

    if (isMobile && showMenu) {
      setIsVisible(true)
    }

  }, [isBigScreen, isMobile, showMenu])

  const handleHideMenu = () => {
    dispatch({
      type: 'TOGGLE_MENU',
      payload: false,
    });
  }


  return transitions((style, item) => item &&
    <animated.nav style={style} className={`${styles.nav}`}>
      <ul>
        {
          trail.map((styles, index) => {
            return <MenuItemAnimated style={styles} onClick={handleHideMenu} key={index}>{menuItems[index]}</MenuItemAnimated>
          })
        }
      </ul>
    </animated.nav>
  )
};


export default Menu;
