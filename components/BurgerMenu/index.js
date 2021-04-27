// Burger.js
import { useSpring, useChain, animated } from 'react-spring';
import { useStateContext, useStateDispatch } from '@/store/store';
import style from './BurgerMenu.module.scss';
import { useEffect } from 'react';

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

  const [line1, api1] = useSpring(() => ({
    from: { transform: 'rotate(0deg)' },
    to: async (next, cancel) => {
      await next({ transform: 'rotate(0deg)' })
      await next({ y: 0 })
    }
  })
  )

  const line2 = useSpring({
    from: { opacity: 0 },
    to: showMenu ? { opacity: 0 } : { opacity: 1 },
  });

  const [line3, api3] = useSpring(() => ({
    from: { transform: 'rotate(0deg)' },
    to: async (next, cancel) => {
      await next({ transform: 'rotate(0deg)' })
      await next({ y: 0 })
    }
  })
  )

  useEffect(() => {
    showMenu ?
      api1.start({
        to: async (next, cancel) => {
          await next({ y: 10 })
          await next({ transform: 'rotate(45deg)' })
        }
      })
      : api1.start({
        to: async (next, cancel) => {
          await next({ transform: 'rotate(0deg)' })
          await next({ y: 0 })
        }
      })

    showMenu ?
      api3.start({
        to: async (next, cancel) => {
          await next({ y: -10 })
          await next({ transform: 'rotate(-45deg)' })
        }
      })
      : api3.start({
        to: async (next, cancel) => {
          await next({ transform: 'rotate(0deg)' })
          await next({ y: 0 })
        }
      })

  }, [showMenu])

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
