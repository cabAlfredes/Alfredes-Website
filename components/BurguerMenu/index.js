// Burger.js
import { useSpring, animated } from 'react-spring';
import { useStateContext, useStateDispatch } from '@/store/store';
import style from './BurgerMenu.module.scss';

export default function Burger() {
  const state = useStateContext();
  const showMenu = false;
  console.log(state);
  const dispatch = useStateDispatch();

  const line1 = useSpring({
    transform: showMenu ? 'rotate(45deg)' : 'rotate(0deg)',
  });
  const line2 = useSpring({
    opacity: showMenu ? 0 : 1,
  });
  const line3 = useSpring({
    transform: showMenu ? 'rotate(-45deg)' : 'rotate(0deg)',
  });

  const handleSideMenu = () => {
    dispatch({
      type: 'TOGGLE_SIDE_MENU',
      payload: !showMenu,
    });
  };

  return (
    <div
      className={style.burger}
      onClick={handleSideMenu}
      type="button"
      role="button"
      aria-label="open menu"
      onKeyDown={() => {
        console.log('key down');
      }}
    >
      <animated.div style={line1} className={`${style.line} `} />
      <animated.div style={line2} className={`${style.line} `} />
      <animated.div style={line3} className={`${style.line} `} />
    </div>
  );
}
