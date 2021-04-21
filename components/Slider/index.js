import Glide from '@glidejs/glide';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './slider.module.scss';

const Slider = () => {
  const imagesSuffixGenerator = Array.from(Array(12).keys());
  const glideConfig = {
    perView: 3,
    // autoplay: 2000,
    bound: true,
    breakpoints: {
      1024: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  };

  useEffect(() => {
    const glide = new Glide('.glide', glideConfig);

    glide.on('mount.before', function () {
      console.log('before mount');
    });
    glide.on('mount.before', function () {
      console.log('after mount');
    });
    glide.mount();
  });

  return (
    <div className={styles.glideWrapper}>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {imagesSuffixGenerator.map((ele, index) => (
              <li className="glide__slide" key={index}>
                <Image
                  src={`/assets/images/slider/foto_${index + 1}-min.jpg`}
                  alt=""
                  width="3968"
                  height="2976"
                  layout="responsive"
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            type="button"
            aria-label="Imagen Previa"
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            ◀
          </button>
          <button
            type="button"
            aria-label="Proxima Imagen"
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            ▶
          </button>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {imagesSuffixGenerator.map((ele, index) => (
            <button
              type="button"
              className="glide__bullet"
              aria-label={`Move the slider to image ${index + 1}`}
              data-glide-dir={`=${index}`} // the '=' should be there
              key={index + 55}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
