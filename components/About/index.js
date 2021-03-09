import SectionTitle from '@/components/SectionTitle';
import styles from './about.module.css';

function about(props) {
  return (
    <section id="about" className={styles.wrapper}>
      <SectionTitle>Historia de la cabaña</SectionTitle>
      <div className={styles.content}>
        <p>
          La cabaña fue construida por mi, utilizando mayormente materiales
          locales y reciclados, buscando de esta manera ser lo mas amigable
          posible con el ambiente. Esta ubicada en un arroyo muy tranquilo de la
          2° secc. del delta en lo que se denomina reserva de biosfera. Aquí
          trato de ir implantando especies nativas que se vieron seriamente
          desplazadas por el mono cultivo.
        </p>
        <p>
          Uno de los aportes mas interesantes en la diversidad de plantas es el
          regreso de la diversidad de aves, insectos, mariposas y vaya uno a
          saber que mas.
        </p>
        <p>
          El lugar cuenta con todo lo necesario para estar comodo y protegido a
          la vez que muy tranquilo disfrutando del silencio y el entorno...
          Construida en dos pisos la cabaña esta ubicada sobre el ARROYO FREDES,
          en un excelente lugar para descansar y disfrutar de un entorno verde y
          natural, donde usted podrá remar, nadar, navegar y sobre todo
          descansar
        </p>
      </div>
    </section>
  );
}

export default about;
