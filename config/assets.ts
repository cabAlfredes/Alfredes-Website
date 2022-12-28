import { StaticImageData } from "next/image";
import image1 from "../assets/gallery/exterior/foto_1.jpg";
import image2 from "../assets/gallery/exterior/foto_2.jpg";
import image3 from "../assets/gallery/exterior/foto_3.jpg";
import image4 from "../assets/gallery/exterior/foto_4.jpg";
import image5 from "../assets/gallery/exterior/foto_5.jpg";
import image6 from "../assets/gallery/exterior/foto_6.jpg";
import image7 from "../assets/gallery/exterior/foto_7.jpg";
import image8 from "../assets/gallery/exterior/foto_8.jpg";
import image9 from "../assets/gallery/exterior/foto_9.jpg";
import image10 from "../assets/gallery/exterior/foto_10.jpg";


import interior2 from "../assets/gallery/interior/photo_int_2.jpg";
import interior3 from "../assets/gallery/interior/photo_int_3.jpg";
import interior4 from "../assets/gallery/interior/photo_int_4.jpg";
import interior5 from "../assets/gallery/interior/photo_int_5.jpg";
import interior6 from "../assets/gallery/interior/photo_int_6.jpg";
import interior7 from "../assets/gallery/interior/photo_int_7.jpg";
import interior8 from "../assets/gallery/interior/photo_int_8.jpg";
import interior9 from "../assets/gallery/interior/photo_int_9.jpg";

export interface Asset {
	title: string;
	description?: string;
	src: StaticImageData;
	alt: string;
	layoutCols?: number;
	layoutRows?: number;
}

export interface ImagesAssets {
	[key: string]: Asset[];
}

export const images: ImagesAssets = {
	exterior: [
		{
			src: image1,
			title: "Foto",
			alt: "Foto desde dron",

			layoutCols: 1,
			layoutRows: 2,
		},
		{
			src: image2,
			title: "Foto",
			alt: "Foto frente de la cabaña",
		},
		{
			src: image4,
			title: "Foto",
			alt: "Foto desde dron 2",
		},
		{
			src: image3,
			title: "Foto",
			alt: "Foto del exterior de la cabaña",

			layoutCols: 2,
			layoutRows: 2,
		},
		{
			src: image5,
			title: "Foto",
			alt: "Foto del exterior de la cabaña 2",

			layoutCols: 1,
			layoutRows: 2,
		},
		{
			src: image6,
			title: "Foto",
			alt: "Foto desde el muelle",
		},
		{
			src: image7,
			title: "Foto",
			alt: "Foto de raposeras y el rio",
		},
		{
			src: image8,
			title: "Foto",
			alt: "Foto del exterior",
		},
		{
			src: image9,
			alt: "Foto de raposeras y el rio 2",
			title: "Foto",
		},
		{
			src: image10,
			alt: "Fotos del rio",
			title: "Foto",
		},
	],
	interior: [
		{
			src: interior9,
			title: "Foto",
			alt: "Cama",

			layoutCols: 2,
			layoutRows: 2,
		},
		{
			src: interior2,
			title: "Foto",
			alt: "Foto cama vista rio",
		},
		{
			src: interior3,
			title: "Foto",
			alt: "Foto banco madera",

			layoutCols: 1,
			layoutRows: 2,
		},
		{
			src: interior5,
			title: "Foto",
			alt: "Foto escalera y salamandra",
		},
		{
			src: interior6,
			title: "Foto",
			alt: "Foto del Baño",
		},
		{
			src: interior7,
			title: "Foto de la cocina",
			alt: "Cocina",
			layoutCols: 1,
			layoutRows: 2,
		},
		{
			src: interior8,
			title: "Foto",
			alt: "Foto desde adentro con vista del exterior",
			layoutCols: 1,
			layoutRows: 2,
		},
		{
			src: interior4,
			title: "Foto",
			alt: "Foto desde adentro con vista del exterior",
			layoutCols: 1,
			layoutRows: 2,
		},

	],
};
