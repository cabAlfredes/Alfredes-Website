import Document, { Head, Html, Main, NextScript } from "next/document";

const description = "	Cabaña en alquiler de fin de semana, disponible durante todo el año en el delta de Buenos Aires. Podes remar, pescar o solo relajarte y disfrutar del Delta donde la tranquilidad solo es interrumpida por el cantar de los pájaros."
const imageOG = '/assets/hero_xl.jpg'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/favicon_io/favicon.ico" />
					<link rel="manifest" href="manifest.json"></link>
					<meta name="description" content={description} />

						{/* <!-- Facebook Meta Tags --> */}
						<meta property="og:url" content="https://alfredes.com.ar/" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Cabaña Alfredes | La Cabaña" key="title" />
						<meta property="og:description" content={description} />
						<meta property="og:image" content={imageOG} />

						{/* <!-- Twitter Meta Tags --> */}
						<meta name="twitter:card" content="summary_large_image" />
						<meta property="twitter:domain" content="alfredes.com.ar" />
						<meta property="twitter:url" content="https://alfredes.com.ar/" />
						<meta name="twitter:title" content="Cabaña Alfredes" />
						<meta name="twitter:description" content={description} />
						<meta name="twitter:image" content={imageOG} />
						<link
							rel="preconnect"
							href="https://fonts.gstatic.com"
							crossorigin
						></link>
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
						<link href="https://fonts.googleapis.com/css2?family=Neucha&family=Permanent+Marker&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

						<link
							href="https://fonts.googleapis.com/icon?family=Material+Icons"
							rel="stylesheet"
						></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
