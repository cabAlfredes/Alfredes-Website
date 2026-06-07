export const languages = {
	es: "Español",
	en: "English",
	pt: "Português",
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = "es";

export const ui = {
	es: {
		// Meta / page titles
		"meta.site": "Cabaña Alfredes",
		"meta.about": "Cabaña Alfredes | La Cabaña",
		"meta.servicios": "Cabaña Alfredes | Servicios",
		"meta.fotos": "Cabaña Alfredes | Fotos",
		"meta.contacto": "Cabaña Alfredes | Contacto",
		"meta.comoLlegar": "Cabaña Alfredes | Cómo llegar",

		// Meta / descriptions
		"meta.desc.home":
			"Tu refugio en el Delta del Paraná. Cabaña artesanal sobre el Arroyo Fredes, rodeada de naturaleza, río y tranquilidad. Reservá tu estadía.",
		"meta.desc.about":
			"Conocé la historia de Cabaña Alfredes, construida artesanalmente con materiales locales y reciclados en la reserva de biosfera del Delta del Paraná.",
		"meta.desc.servicios":
			"WiFi, energía solar, cocina equipada, cama matrimonial, piragua, parrilla, deck al rio y ropa de cama. Todo lo que necesitás para tu estadía.",
		"meta.desc.fotos":
			"Galería de fotos de Cabaña Alfredes. Descubrí los espacios interiores y exteriores de esta cabaña en el Delta del Paraná.",
		"meta.desc.contacto":
			"Contactanos para reservar tu estadía en Cabaña Alfredes. Respondemos por WhatsApp o email.",
		"meta.desc.comoLlegar":
			"Cómo llegar a Cabaña Alfredes en el Delta del Paraná. Instrucciones detalladas en lancha colectiva o bote propio desde Tigre.",

		// Nav
		"nav.home": "Inicio",
		"nav.about": "La Cabaña",
		"nav.services": "Servicios",
		"nav.photos": "Fotos",
		"nav.contact": "Contacto",
		"nav.howToArrive": "Cómo Llegar",

		// Home
		"home.title": "Cabaña Alfredes",
		"home.subtitle":
			"Tu refugio en el Delta del Paraná. Naturaleza, río y tranquilidad.",
		"home.cta": "Reservá tu estadía",
		// Home – landing page extras
		"home.badge": "Reserva de Biosfera · Delta del Paraná",
		"home.cta2": "Ver galería",
		"home.experiences.title": "Una experiencia única",
		"home.experiences.subtitle":
			"La naturaleza del Delta te ofrece momentos que no se olvidan",
		"home.fishing.title": "Pesca",
		"home.fishing.desc":
			"Lanzá el anzuelo en aguas tranquilas rodeadas de aves y silencio. El Delta del Paraná es uno de los mejores destinos de pesca de Argentina.",
		"home.rowing.title": "Remo",
		"home.rowing.desc":
			"Explorá arroyos serenos en la piragua de la cabaña. Cada recodo esconde un paisaje distinto, siempre en calma.",
		"home.relax.title": "Descanso Profundo",
		"home.relax.desc":
			"Desconectate del ruido de la ciudad. Sin aglomeraciones, sin prisa. Solo el murmullo del río y el canto de los pájaros.",
		"home.story.eyebrow": "Nuestra Cabaña",
		"home.story.heading": "Construida a mano, a orillas del Arroyo Fredes",
		// "home.story.body": "Ubicada en un arroyo muy tranquilo de la 2° secc. del delta en lo que se denomina reserva de biosfera. Construida en dos pisos sobre el ARROYO FREDES.  En la reserva de biosfera",		
		"home.story.body":
			"En la 2° sección del Delta, en lo que se denomina reserva de biosfera, esta cabaña fue construida artesanalmente con materiales locales y reciclados. Construida en dos pisos, rodeados de flora nativa que crece y florece cada temporada.",
		"home.story.link": "Conocé la historia",
		"home.amenities.title": "Todo lo que necesitás",
		"home.amenity.wifi": "WiFi",
		"home.amenity.solar": "Energía Solar",
		"home.amenity.kitchen": "Cocina Equipada",
		"home.amenity.bed": "Cama Matrimonial",
		"home.amenity.kayak": "Piragua/Kayak",
		"home.amenity.bbq": "Parrilla",
		"home.amenity.deck": "Deck al Rio",
		"home.amenity.linens": "Ropa de Cama y Toallas",
		"home.gallery.title": "Así es Alfredes",
		"home.gallery.link": "Ver todas las fotos",
		"home.reserve.title": "¿Listo para tu escapada?",
		"home.reserve.subtitle": "Plazas limitadas — reservá con anticipación",
		"home.reserve.whatsapp": "Escribinos por WhatsApp",

		// About
		"about.pageTitle": "La Cabaña",
		"about.pageSubtitle": "Conoce nuestra historia y construcción",
		"about.cardTitle": "Nuestra Historia",
		"about.cardSubtitle": "Construida con amor y respeto por la naturaleza",
		"about.sustainableTitle": "Construcción Sustentable",
		"about.sustainable":
			"La cabaña fue construida por mi, utilizando mayormente materiales locales y reciclados, buscando de esta manera ser lo mas amigable posible con el ambiente.",
		"about.locationTitle": "Ubicación Privilegiada",
		"about.location":
			"Está ubicada en un arroyo muy tranquilo de la 2° secc. del delta en lo que se denomina reserva de biosfera. Construida en dos pisos sobre el",
		"about.locationRiver": "ARROYO FREDES",
		"about.ecoTitle": "Compromiso Ecológico",
		"about.eco":
			"Aquí trato de ir implantando especies nativas que se vieron seriamente desplazadas por el mono cultivo. Uno de los aportes mas interesantes en la diversidad de plantas es el regreso de la diversidad de aves, insectos, mariposas y vaya uno a saber que mas.",
		"about.experienceTitle": "Tu Experiencia",
		"about.experience":
			"El lugar cuenta con todo lo necesario para estar cómodo y protegido a la vez que muy tranquilo disfrutando del silencio y el entorno. Un excelente lugar para descansar y disfrutar de un entorno verde y natural, donde usted podrá remar, nadar, navegar y sobre todo descansar.",
		"about.quote":
			"Construida con materiales locales y reciclados, nuestra cabaña es un refugio donde la naturaleza y la comodidad se encuentran en perfecta armonía.",

		// Services
		"services.pageTitle": "Servicios",
		"services.pageSubtitle": "Todo lo que necesitas para tu estadía",
		"services.wifi": "Ahora la cabaña esta conectada a internet.",
		"services.solar":
			"Tenemos Paneles solares para poder seguir teniendo luz en caso de corte.",
		"services.kitchen":
			"La Cabaña cuenta con un living cocina-comedor equipada con utensilios y elementos de cocina para 2 ó 4 personas.",
		"services.fridge": "Heladera y Cocina convencional con Horno.",
		"services.linens": "Blancos - Sabanas - Toallas",
		"services.bed":
			"Cama matrimonial con vista al rio y fondo del parque en el piso superior.",
		"services.deck": "Deck con vista al río.",
		"services.kayak": "Una piragua a disposición para remar.",
		"services.bbq": "Parrilla y mesa en el jardín.",

		// Photos
		"photos.pageTitle": "Galería de Imágenes",
		"photos.pageSubtitle": "Descubre la belleza de Cabaña Alfredes",
		"photos.tabInterior": "Interior",
		"photos.tabExterior": "Exterior",
		"photos.interiorTitle": "Espacios Interiores",
		"photos.interiorSubtitle": "Confort y calidez en cada rincón",
		"photos.exteriorTitle": "Espacios Exteriores",
		"photos.exteriorSubtitle": "Naturaleza y tranquilidad del Delta",

		// Contact
		"contact.pageTitle": "Contacto",
		"contact.pageSubtitle": "Estamos para ayudarte con tu reserva",
		"contact.infoTitle": "Información de Contacto",
		"contact.emailLabel": "Envíanos un Email",
		"contact.whatsappLabel": "Contactar por WhatsApp",
		"contact.socialLabel": "Redes Sociales",
		"contact.whatsappCta": "Chateá con nosotros",

		// How to arrive
		"arrive.pageTitle": "Cómo Llegar",
		"arrive.pageSubtitle": "Encuentra el camino a tu descanso",
		"arrive.heading": "¿COMO LLEGAR?",
		"arrive.reservationOnly": "(SOLO CON RESERVA PREVIA)",
		"arrive.p1":
			"En lanchas colectivas de la LINEA INTERISLEÑA salen de la Estación Fluvial de Tigre ubicada en la Av. Mitre 305.",
		"arrive.p2":
			"Hay 2 principales opciones que varían según el dia de la semana y época del año.",
		"arrive.p3":
			"En la boletaría de la linea interisleña indicar que se va al Arroyo Fredes y Estudiantes, Muelle el Arroyon de Gomez. En la boletaría de la linea interisleña decir que se va a la cabaña ALFREDES en el Arroyo Fredes indicando que se baja en el muelle EL MOSQUITO en el arroyo Fredes. Preguntar en la rampa en que lancha debes subir, se recomienda estar con anticipación ya que suele haber bastante gente. Siempre Consultar con anticipación en la cabaña que horario es el mas conveniente.",
		"arrive.coordsTitle": "Coordenadas de la Cabaña",
		"arrive.coordsSubtitle": "para llegar en tu propia lancha.",
		"arrive.mapTitle": "Mapa de Cómo Llegar a Cabaña Alfredes",

		// Contact form
		"form.title": "Envíanos un Mensaje",
		"form.success": "¡Gracias! Mensaje enviado",
		"form.sendAnother": "Enviar otro mensaje",
		"form.name": "Nombre",
		"form.namePlaceholder": "Tu nombre completo",
		"form.email": "Email",
		"form.emailPlaceholder": "tu@email.com",
		"form.phone": "Teléfono",
		"form.phonePlaceholder": "+54 9 11 1234-5678",
		"form.dates": "Fechas de estadía",
		"form.arrival": "Llegada",
		"form.departure": "Salida",
		"form.message": "Mensaje",
		"form.messagePlaceholder": "Cuéntanos sobre tu consulta o reserva...",
		"form.submit": "Enviar",
		"form.submitting": "Enviando...",

		// Footer
		"footer.credit": "Desarrollo de",
	},

	en: {
		"meta.site": "Cabaña Alfredes",
		"meta.about": "Cabaña Alfredes | The Cabin",
		"meta.servicios": "Cabaña Alfredes | Services",
		"meta.fotos": "Cabaña Alfredes | Photos",
		"meta.contacto": "Cabaña Alfredes | Contact",
		"meta.comoLlegar": "Cabaña Alfredes | How to Arrive",

		// Meta / descriptions
		"meta.desc.home":
			"Your retreat in the Paraná Delta. A hand-built cabin on Arroyo Fredes, surrounded by nature, river and tranquility. Book your stay.",
		"meta.desc.about":
			"Learn the story of Cabaña Alfredes, hand-built with local and recycled materials in the Paraná Delta biosphere reserve.",
		"meta.desc.servicios":
			"WiFi, solar power, full kitchen, double bed, kayak, BBQ grill, deck and linens. Everything you need for your stay.",
		"meta.desc.fotos":
			"Photo gallery of Cabaña Alfredes. Discover the interior and exterior spaces of this cabin in the Paraná Delta.",
		"meta.desc.contacto":
			"Contact us to book your stay at Cabaña Alfredes. We respond via WhatsApp or email.",
		"meta.desc.comoLlegar":
			"How to get to Cabaña Alfredes in the Paraná Delta. Detailed instructions by water taxi or private boat from Tigre.",

		"nav.home": "Home",
		"nav.about": "The Cabin",
		"nav.services": "Services",
		"nav.photos": "Photos",
		"nav.contact": "Contact",
		"nav.howToArrive": "How to Arrive",

		"home.title": "Cabaña Alfredes",
		"home.subtitle":
			"Your retreat in the Paraná Delta. Nature, river and tranquility.",
		"home.cta": "Book your stay",
		// Home – landing page extras
		"home.badge": "Biosphere Reserve · Paraná Delta",
		"home.cta2": "View gallery",
		"home.experiences.title": "A unique experience",
		"home.experiences.subtitle":
			"The Delta's nature offers moments you will never forget",
		"home.fishing.title": "Fishing",
		"home.fishing.desc":
			"Cast your line in calm waters surrounded by birds and silence. The Paraná Delta is one of Argentina's finest fishing destinations.",
		"home.rowing.title": "Rowing",
		"home.rowing.desc":
			"Explore serene creeks in the cabin's kayak. Every bend hides a new landscape, always calm and beautiful.",
		"home.relax.title": "Deep Rest",
		"home.relax.desc":
			"Disconnect from city noise. No crowds, no rush. Just the murmur of the river and birdsong filling the air.",
		"home.story.eyebrow": "The Cabin",
		"home.story.heading": "Hand-built on the banks of Arroyo Fredes",
		"home.story.body":
			"In the 2nd section of the Delta, within a biosphere reserve, this cabin was hand-built using local and recycled materials. Two floors over the water, surrounded by native flora that grows and blooms each season.",
		"home.story.link": "Read our story",
		"home.amenities.title": "Everything you need",
		"home.amenity.wifi": "WiFi",
		"home.amenity.solar": "Solar Power",
		"home.amenity.kitchen": "Full Kitchen",
		"home.amenity.bed": "Double Bed",
		"home.amenity.kayak": "Kayak",
		"home.amenity.bbq": "BBQ Grill",
		"home.amenity.deck": "Deck with River View",
		"home.amenity.linens": "Linens & Towels",
		"home.gallery.title": "A glimpse of Alfredes",
		"home.gallery.link": "See all photos",
		"home.reserve.title": "Ready for your escape?",
		"home.reserve.subtitle": "Limited availability — book early",
		"home.reserve.whatsapp": "Message us on WhatsApp",

		"about.pageTitle": "The Cabin",
		"about.pageSubtitle": "Learn our story and how it was built",
		"about.cardTitle": "Our Story",
		"about.cardSubtitle": "Built with love and respect for nature",
		"about.sustainableTitle": "Sustainable Construction",
		"about.sustainable":
			"The cabin was built by me, using mostly local and recycled materials, seeking to be as environmentally friendly as possible.",
		"about.locationTitle": "Prime Location",
		"about.location":
			"It is located on a very quiet creek in the 2nd section of the delta, in what is called the biosphere reserve. Built on two floors over the",
		"about.locationRiver": "FREDES CREEK",
		"about.ecoTitle": "Ecological Commitment",
		"about.eco":
			"Here I try to plant native species that have been seriously displaced by monoculture. One of the most interesting contributions in plant diversity is the return of diverse birds, insects, butterflies and who knows what else.",
		"about.experienceTitle": "Your Experience",
		"about.experience":
			"The place has everything you need to be comfortable and sheltered, while being very peaceful, enjoying the silence and the surroundings. An excellent place to rest and enjoy a green and natural environment, where you can paddle, swim, sail and above all relax.",
		"about.quote":
			"Built with local and recycled materials, our cabin is a retreat where nature and comfort meet in perfect harmony.",

		"services.pageTitle": "Services",
		"services.pageSubtitle": "Everything you need for your stay",
		"services.wifi": "The cabin is now connected to the internet.",
		"services.solar":
			"We have solar panels to keep the lights on in case of a power outage.",
		"services.kitchen":
			"The cabin has a kitchen-living-dining room equipped with utensils and cookware for 2 or 4 people.",
		"services.fridge": "Refrigerator and conventional stove with oven.",
		"services.linens": "Linens – Sheets – Towels",
		"services.bed":
			"Double bed with river view and park backdrop on the upper floor.",
		"services.deck": "Deck with river view.",
		"services.kayak": "A kayak available for paddling.",
		"services.bbq": "BBQ grill and table in the garden.",

		"photos.pageTitle": "Image Gallery",
		"photos.pageSubtitle": "Discover the beauty of Cabaña Alfredes",
		"photos.tabInterior": "Interior",
		"photos.tabExterior": "Exterior",
		"photos.interiorTitle": "Interior Spaces",
		"photos.interiorSubtitle": "Comfort and warmth in every corner",
		"photos.exteriorTitle": "Exterior Spaces",
		"photos.exteriorSubtitle": "Nature and tranquility of the Delta",

		"contact.pageTitle": "Contact",
		"contact.pageSubtitle": "We're here to help with your booking",
		"contact.infoTitle": "Contact Information",
		"contact.emailLabel": "Send us an Email",
		"contact.whatsappLabel": "Contact via WhatsApp",
		"contact.socialLabel": "Social Media",
		"contact.whatsappCta": "Chat with us",

		"arrive.pageTitle": "How to Arrive",
		"arrive.pageSubtitle": "Find your way to relaxation",
		"arrive.heading": "HOW TO GET THERE?",
		"arrive.reservationOnly": "(BY PRIOR RESERVATION ONLY)",
		"arrive.p1":
			"By collective water taxis on the INTERISLEÑA LINE, departing from the Tigre River Station located at Av. Mitre 305.",
		"arrive.p2":
			"There are 2 main options that vary depending on the day of the week and time of year.",
		"arrive.p3":
			"At the Interisleña line ticket office, indicate you are going to Arroyo Fredes y Estudiantes, Muelle el Arroyon de Gomez. Tell them you are going to the ALFREDES cabin on Arroyo Fredes and that you get off at the EL MOSQUITO dock on Arroyo Fredes. Ask at the ramp which boat to board — it is recommended to arrive early as there are usually many people. Always check in advance with the cabin for the most convenient schedule.",
		"arrive.coordsTitle": "Cabin Coordinates",
		"arrive.coordsSubtitle": "to arrive in your own boat.",
		"arrive.mapTitle": "Map – How to get to Cabaña Alfredes",

		"form.title": "Send us a Message",
		"form.success": "Thank you! Message sent",
		"form.sendAnother": "Send another message",
		"form.name": "Name",
		"form.namePlaceholder": "Your full name",
		"form.email": "Email",
		"form.emailPlaceholder": "your@email.com",
		"form.phone": "Phone",
		"form.phonePlaceholder": "+54 9 11 1234-5678",
		"form.dates": "Stay dates",
		"form.arrival": "Arrival",
		"form.departure": "Departure",
		"form.message": "Message",
		"form.messagePlaceholder": "Tell us about your inquiry or booking...",
		"form.submit": "Send",
		"form.submitting": "Sending...",

		"footer.credit": "Developed by",
	},

	pt: {
		"meta.site": "Cabaña Alfredes",
		"meta.about": "Cabaña Alfredes | A Cabana",
		"meta.servicios": "Cabaña Alfredes | Serviços",
		"meta.fotos": "Cabaña Alfredes | Fotos",
		"meta.contacto": "Cabaña Alfredes | Contato",
		"meta.comoLlegar": "Cabaña Alfredes | Como Chegar",

		// Meta / descriptions
		"meta.desc.home":
			"Seu refúgio no Delta do Paraná. Uma cabana artesanal às margens do Arroyo Fredes, cercada de natureza, rio e tranquilidade. Reserve sua estadia.",
		"meta.desc.about":
			"Conheça a história da Cabaña Alfredes, construída artesanalmente com materiais locais e reciclados na reserva da biosfera do Delta do Paraná.",
		"meta.desc.servicios":
			"WiFi, energia solar, cozinha equipada, cama de casal, caiaque, churrasqueira, deck e roupas de cama. Tudo para sua estadia.",
		"meta.desc.fotos":
			"Galeria de fotos da Cabaña Alfredes. Descubra os espaços interiores e exteriores desta cabana no Delta do Paraná.",
		"meta.desc.contacto":
			"Contate-nos para reservar sua estadia na Cabaña Alfredes. Respondemos via WhatsApp ou email.",
		"meta.desc.comoLlegar":
			"Como chegar à Cabaña Alfredes no Delta do Paraná. Instruções detalhadas por lancha coletiva ou barco próprio a partir de Tigre.",

		"nav.home": "Início",
		"nav.about": "A Cabana",
		"nav.services": "Serviços",
		"nav.photos": "Fotos",
		"nav.contact": "Contato",
		"nav.howToArrive": "Como Chegar",

		"home.title": "Cabaña Alfredes.",
		"home.subtitle":
			"Seu refúgio no Delta do Paraná. Natureza, rio e tranquilidade.",
		"home.cta": "Reserve sua estadia",
		// Home – landing page extras
		"home.badge": "Reserva da Biosfera · Delta do Paraná",
		"home.cta2": "Ver galeria",
		"home.experiences.title": "Uma experiência única",
		"home.experiences.subtitle":
			"A natureza do Delta oferece momentos inesquecíveis",
		"home.fishing.title": "Pesca",
		"home.fishing.desc":
			"Lance sua linha em águas tranquilas cercadas de aves e silêncio. O Delta do Paraná é um dos melhores destinos de pesca da Argentina.",
		"home.rowing.title": "Remo",
		"home.rowing.desc":
			"Explore riachos serenos no caiaque da cabana. Cada curva esconde uma paisagem diferente, sempre tranquila e bela.",
		"home.relax.title": "Descanso Profundo",
		"home.relax.desc":
			"Desconecte-se do barulho da cidade. Sem multidões, sem pressa. Apenas o murmúrio do rio e o canto dos pássaros.",
		"home.story.eyebrow": "A Cabana",
		"home.story.heading": "Construída à mão, às margens do Arroyo Fredes",
		"home.story.body":
			"Na 2ª seção do Delta, dentro de uma reserva da biosfera, esta cabana foi construída artesanalmente com materiais locais e reciclados. Dois andares sobre a água, cercados de flora nativa que cresce e floresce a cada temporada.",
		"home.story.link": "Conheça a história",
		"home.amenities.title": "Tudo o que você precisa",
		"home.amenity.wifi": "WiFi",
		"home.amenity.solar": "Energia Solar",
		"home.amenity.kitchen": "Cozinha Equipada",
		"home.amenity.bed": "Cama de Casal",
		"home.amenity.kayak": "Caiaque",
		"home.amenity.bbq": "Churrasqueira",
		"home.amenity.deck": "Deck com Vista para o Rio",
		"home.amenity.linens": "Roupas de Cama",
		"home.gallery.title": "Assim é Alfredes",
		"home.gallery.link": "Ver todas as fotos",
		"home.reserve.title": "Pronto para sua escapada?",
		"home.reserve.subtitle": "Vagas limitadas — reserve com antecedência",
		"home.reserve.whatsapp": "Fale pelo WhatsApp",

		"about.pageTitle": "A Cabana",
		"about.pageSubtitle": "Conheça nossa história e como foi construída",
		"about.cardTitle": "Nossa História",
		"about.cardSubtitle": "Construída com amor e respeito pela natureza",
		"about.sustainableTitle": "Construção Sustentável",
		"about.sustainable":
			"A cabana foi construída por mim, utilizando principalmente materiais locais e reciclados, buscando ser o mais amigável possível com o meio ambiente.",
		"about.locationTitle": "Localização Privilegiada",
		"about.location":
			"Está localizada em um riacho muito tranquilo da 2ª seção do delta, na chamada reserva da biosfera. Construída em dois andares sobre o",
		"about.locationRiver": "ARROYO FREDES",
		"about.ecoTitle": "Compromisso Ecológico",
		"about.eco":
			"Aqui procuro plantar espécies nativas que foram seriamente deslocadas pela monocultura. Uma das contribuições mais interessantes na diversidade de plantas é o retorno da diversidade de aves, insetos, borboletas e quem sabe o quê mais.",
		"about.experienceTitle": "Sua Experiência",
		"about.experience":
			"O lugar tem tudo o que você precisa para ficar confortável e protegido, ao mesmo tempo muito tranquilo, desfrutando do silêncio e do entorno. Um lugar excelente para descansar e desfrutar de um ambiente verde e natural, onde você pode remar, nadar, navegar e acima de tudo descansar.",
		"about.quote":
			"Construída com materiais locais e reciclados, nossa cabana é um refúgio onde a natureza e o conforto se encontram em perfeita harmonia.",

		"services.pageTitle": "Serviços",
		"services.pageSubtitle": "Tudo o que você precisa para sua estadia",
		"services.wifi": "A cabana agora está conectada à internet.",
		"services.solar":
			"Temos painéis solares para manter as luzes acesas em caso de falta de energia.",
		"services.kitchen":
			"A cabana conta com uma sala de estar, cozinha e sala de jantar equipada com utensílios e itens de cozinha para 2 ou 4 pessoas.",
		"services.fridge": "Geladeira e fogão convencional com forno.",
		"services.linens": "Roupas de cama – Lençóis – Toalhas",
		"services.bed":
			"Cama de casal com vista para o rio e fundo do parque no andar superior.",
		"services.deck": "Deck com vista para o rio.",
		"services.kayak": "Um caiaque disponível para remar.",
		"services.bbq": "Churrasqueira e mesa no jardim.",

		"photos.pageTitle": "Galeria de Imagens",
		"photos.pageSubtitle": "Descubra a beleza da Cabaña Alfredes",
		"photos.tabInterior": "Interior",
		"photos.tabExterior": "Exterior",
		"photos.interiorTitle": "Espaços Interiores",
		"photos.interiorSubtitle": "Conforto e aconchego em cada canto",
		"photos.exteriorTitle": "Espaços Exteriores",
		"photos.exteriorSubtitle": "Natureza e tranquilidade do Delta",

		"contact.pageTitle": "Contato",
		"contact.pageSubtitle": "Estamos aqui para ajudar com sua reserva",
		"contact.infoTitle": "Informações de Contato",
		"contact.emailLabel": "Envie-nos um Email",
		"contact.whatsappLabel": "Contatar via WhatsApp",
		"contact.socialLabel": "Redes Sociais",
		"contact.whatsappCta": "Converse conosco",

		"arrive.pageTitle": "Como Chegar",
		"arrive.pageSubtitle": "Encontre o caminho para o seu descanso",
		"arrive.heading": "COMO CHEGAR?",
		"arrive.reservationOnly": "(SOMENTE COM RESERVA PRÉVIA)",
		"arrive.p1":
			"Em lanchas coletivas da LINHA INTERISLEÑA, saindo da Estação Fluvial de Tigre localizada na Av. Mitre 305.",
		"arrive.p2":
			"Há 2 opções principais que variam de acordo com o dia da semana e a época do ano.",
		"arrive.p3":
			"Na bilheteria da linha interisleña, informe que vai ao Arroyo Fredes y Estudiantes, Muelle el Arroyon de Gomez. Diga que vai à cabana ALFREDES no Arroyo Fredes e que desembarca no cais EL MOSQUITO no arroyo Fredes. Pergunte na rampa em qual lancha deve embarcar — recomenda-se chegar com antecedência, pois costuma haver bastante gente. Sempre consulte com antecedência a cabana sobre o horário mais conveniente.",
		"arrive.coordsTitle": "Coordenadas da Cabana",
		"arrive.coordsSubtitle": "para chegar em seu próprio barco.",
		"arrive.mapTitle": "Mapa – Como Chegar à Cabaña Alfredes",

		"form.title": "Envie-nos uma Mensagem",
		"form.success": "Obrigado! Mensagem enviada",
		"form.sendAnother": "Enviar outra mensagem",
		"form.name": "Nome",
		"form.namePlaceholder": "Seu nome completo",
		"form.email": "Email",
		"form.emailPlaceholder": "seu@email.com",
		"form.phone": "Telefone",
		"form.phonePlaceholder": "+54 9 11 1234-5678",
		"form.dates": "Datas da estadia",
		"form.arrival": "Chegada",
		"form.departure": "Saída",
		"form.message": "Mensagem",
		"form.messagePlaceholder": "Conte-nos sobre sua consulta ou reserva...",
		"form.submit": "Enviar",
		"form.submitting": "Enviando...",

		"footer.credit": "Desenvolvido por",
	},
} as const;

export type TranslationKey = keyof (typeof ui)["es"];
