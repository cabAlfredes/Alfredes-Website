import { useSpring } from 'react-spring';
import { getPosition } from '../utils/getPosition';

export const useScrollToElement = () => {
  const [, setY] = useSpring(() => ({ y: 0 }));

  let isStopped = false;
  const onWheel = () => {
    console.log('wheel');
    isStopped = true;
    window.removeEventListener('wheel', onWheel);
  };

  const scrollToTarget = (node) => {
    const pos = getPosition(node);

    const value = pos.y + 250;
    window.addEventListener('wheel', onWheel);

    setY({
      y: value,
      reset: false,
      from: { y: window.scrollY },
      onRest: () => {
        isStopped = false;
        window.removeEventListener('wheel', onWheel);
      },
      // onChange: ({ y }) => {
      //   if (!isStopped) {
      //     window.scroll(0, y);
      //   }
      // },
    });
  };

  return { scrollToTarget };
};
