"use client";

import { ContactForm } from "../ContactForm";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Como se construyo la cabaña</h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - About Content */}
        <div>
          <div className="bg-card rounded-lg shadow-sm border p-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                La cabaña fue construida por mi, utilizando mayormente
                materiales locales y reciclados, buscando de esta manera ser lo
                mas amigable posible con el ambiente. Esta ubicada en un arroyo
                muy tranquilo de la 2° secc. del delta en lo que se denomina
                reserva de biosfera. Aquí trato de ir implantando especies
                nativas que se vieron seriamente desplazadas por el mono
                cultivo.
              </p>
              <p>
                Uno de los aportes mas interesantes en la diversidad de plantas
                es el regreso de la diversidad de aves, insectos, mariposas y
                vaya uno a saber que mas.
              </p>
              <p>
                El lugar cuenta con todo lo necesario para estar comodo y
                protegido a la vez que muy tranquilo disfrutando del silencio y
                el entorno... Construida en dos pisos la cabaña esta ubicada
                sobre el ARROYO FREDES, en un excelente lugar para descansar y
                disfrutar de un entorno verde y natural, donde usted podrá
                remar, nadar, navegar y sobre todo descansar
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
