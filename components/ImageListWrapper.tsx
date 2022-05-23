import { ImageList, ImageListItem } from "@mui/material";

import { Asset } from "@/config/assets";
import Image from "next/image";
import React from "react";

interface Props {
	images: Asset[];
	onClick: (e: React.SyntheticEvent<EventTarget>) => void;
}

export const ImageListWrapper = ({ images, onClick }: Props) => {
	console.log(images);
	return (
		<ImageList
			sx={{
				maxWidth: 1440,
				height: "100%",
				margin: "auto",
			}}
			variant="quilted"
			cols={3}
			gap={4}
			rowHeight={350}
		>
			{images.map((image, index) => {
				return (
					<ImageListItem
						key={index}
						cols={image.layoutCols ?? 1}
						rows={image.layoutRows ?? 1}
					>
						<Image
							src={image.src}
							alt={image.alt || "Foto"}
							data-src={image.src.src}
							placeholder={"blur"}
							onClick={onClick}
							layout="fill"
							objectFit="cover"
						/>
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};
