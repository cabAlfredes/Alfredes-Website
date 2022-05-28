import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { Typography } from "@mui/material";

const About = () => {
	return (
		<section>
			<Typography variant="paragraph" component="p">
				La cabaña fue construida por mi, utilizando mayormente materiales
				locales y reciclados, buscando de esta manera ser lo mas amigable
				posible con el ambiente. Esta ubicada en un arroyo muy tranquilo de la
				2° secc. del delta en lo que se denomina reserva de biosfera. Aquí trato
				de ir implantando especies nativas que se vieron seriamente desplazadas
				por el mono cultivo.
			</Typography>
			<Typography variant="paragraph" component="p">
				Uno de los aportes mas interesantes en la diversidad de plantas es el
				regreso de la diversidad de aves, insectos, mariposas y vaya uno a saber
				que mas.
			</Typography>
			<Typography variant="paragraph" component="p">
				El lugar cuenta con todo lo necesario para estar comodo y protegido a la
				vez que muy tranquilo disfrutando del silencio y el entorno...
				Construida en dos pisos la cabaña esta ubicada sobre el ARROYO FREDES,
				en un excelente lugar para descansar y disfrutar de un entorno verde y
				natural, donde usted podrá remar, nadar, navegar y sobre todo descansar
			</Typography>
		</section>
	);
};

export default About;
