// Burger.js
import { useSpring, useChain, animated, } from 'react-spring';
import { useStateContext, useStateDispatch } from '@/store/store';
import style from './BurgerMenu.module.scss';

export default function Burger() {
  const { showMenu } = useStateContext();
  const dispatch = useStateDispatch();


  // // Build a spring and catch its ref
  // const springRef = useSpringRef()
  // const props = useSpring({ ...values, ref: springRef })
  // // Build a transition and catch its ref
  // const transitionRef = useSpringRef()
  // const transitions = useTransition({ ...values, ref: transitionRef })
  // // First run the spring, when it concludes run the transition
  // useChain([springRef, transitionRef])

  // const line1 = useTrail(1, {
  //   transform: 'rotate(45deg)',
  // });

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
      type: 'TOGGLE_MENU',
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
