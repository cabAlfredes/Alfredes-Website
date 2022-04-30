import { StaticImageData } from "next/image";
import image1 from "../assets/slider/resized/foto_1_edited.jpg";
import image2 from "../assets/slider/resized/foto_2_edited.jpg";
import image3 from "../assets/slider/resized/foto_3_edited.jpg";
import image4 from "../assets/slider/resized/foto_4_edited.jpg";
import image5 from "../assets/slider/resized/foto_5_edited.jpg";
import image6 from "../assets/slider/resized/foto_6_edited.jpg";
import image7 from "../assets/slider/resized/foto_7_edited.jpg";
import image8 from "../assets/slider/resized/foto_8_edited.jpg";
import image9 from "../assets/slider/resized/foto_9_edited.jpg";
import image10 from "../assets/slider/resized/foto_10_edited.jpg";

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
			alt: "Foto del exterior Foto 1",

			layoutCols: 1,
			layoutRows: 2,
		},
		{
			src: image2,
			title: "Foto",
			alt: "Foto del exterior",
		},
		{
			src: image4,
			title: "Foto",
			alt: "Foto del exterior",
		},
		{
			src: image3,
			title: "Foto",
			alt: "Foto del exterior",

			layoutCols: 2,
			layoutRows: 2,
		},
		{
			src: image5,
			title: "Foto",
			alt: "Foto del exterior",

			layoutCols: 1,
			layoutRows: 2,
		},
		{
			src: image6,
			title: "Foto",
			alt: "Foto del exterior",
		},
		{
			src: image7,
			title: "Foto",
			alt: "Foto del exterior",
		},
		// {
		// 	src: image8,
		// 	title: "Foto",
		// 	alt: "Foto del exterior",

		// },
	],
	interior: [
		{
			src: image9,
			alt: "Fotos del interior",
			title: "Foto",
		},
		{
			src: image10,
			alt: "Fotos del interior",
			title: "Foto",
		},
	],
};
