import * as React from "react"
import PagesLayout from "../components/pages-layout.js"
import { StaticImage } from "gatsby-plugin-image"
import VisitButton from "../components/visit-button.js"

const Trabajos = () => (
  <PagesLayout title="Mis trabajos">
    <h1 className="centered">Mis trabajos</h1>
    <div class="grid-content-50 align-center gap-40 space-bellow">
      <StaticImage
        src="../assets/trabajos/cotizame-website.png"
        className="medium-image inner-img-medium-border image-shadow border-radius-image portfolio-image"
        alt="Cotiza Me"
      />
      <div class="grid-item">
        <h2>Cotiza Me</h2>
        <p>
          <a
            href="https://cotiza.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotiza Me
          </a>{" "}
          es un emprendiemiento propio para ayudar a los emprendedores y
          empresarios a gestionar las relaciones de sus clientes, servicios y
          productos. Este sitio web fue creado utilizando{" "}
          <a
            href="https://astro.build"
            target="_blank"
            rel="noopener noreferrer"
          >
            Astro
          </a>
          , un software que ayuda a crear sitios web estáticos que cargan muy
          rápido y con muy buena experiencia para los desarrolladores. También
          funciona para crear la aplicación en sí, que funciona con una base de
          datos distribuida. La aplicación está alojada en SR Apps.
        </p>
        <VisitButton to="http://cotiza.me/">Visita el sitio</VisitButton>
      </div>
    </div>
    <div class="grid-content-50 align-center gap-40 space-bellow">
      <div class="grid-item">
        <h2>Servidores Rápidos</h2>
        <p>
          <a
            href="http://servidoresrapidos.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Servidores Rápidos
          </a>
          es una empresa panameña dedicada a ofrecer servicios de hosting y
          dominios. Con más de 20 años de experiencia entre sus fundadores su
          enfoque es ofrecer el mejor servicio posible a todos sus clientes sin
          importar su tamaño y a un costo muy bajo. Este sitio fue creado
          utilizando un tema personalizado, hecho a la medida, basado en{" "}
          <a
            href="https://underscores.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            underscores
          </a>{" "}
          con una pasarela de pagos de{" "}
          <a
            href="https://paguelofacil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Páguelo Fácil
          </a>{" "}
          y{" "}
          <a
            href="https://woocommerce.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WooCommerce
          </a>
          .
        </p>
        <VisitButton to="http://servidoresrapidos.net/">
          Visita el sitio
        </VisitButton>
      </div>
      <StaticImage
        src="../assets/trabajos/servidores-rapidos.png"
        className="medium-image inner-img-medium-border image-shadow border-radius-image portfolio-image"
        alt="Servidores Rápidos"
      />
    </div>

    <div class="grid-content-50 align-center gap-40 space-bellow">
      <StaticImage
        src="../assets/trabajos/concordsecurity.png"
        className="medium-image inner-img-medium-border image-shadow border-radius-image portfolio-image"
        alt="Concord Security"
      />
      <div class="grid-item">
        <h2>Concord Security</h2>
        <p>
          <a
            href="https://concordsecurity.com.pa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ConcordSecurity.com.pa
          </a>
          Es el sitio web de una de las más exitosas empresas de seguridad
          física y electrónica en Panamá. Establecida en el año 1998, la empresa
          se dedica a proporcionar servicios para Empresas, Hogares y Eventos en
          la ciudad de Panamá y aledaños. También cuentan con seguridad
          especializada para puertos. Cuentan con una gran gama de tecnología a
          su disposición. Este sitio fue creado con un tema personalizado basado
          en{" "}
          <a
            href="https://underscores.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            underscores
          </a>{" "}
          siguiendo los lineamientos establecidos por la guía de marca. Creando
          una coherencia entre el sitio web y el resto de sus canales de
          comunicación en redes sociales.
        </p>
        <VisitButton to="https://concordsecurity.com.pa/">
          Visita el sitio
        </VisitButton>
      </div>
    </div>

    <div class="grid-content-50 align-center gap-40 space-bellow">
      <div class="grid-item">
        <h2>InterMaritime </h2>
        <p>
          <a
            href="https://intermaritime.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            InterMaritime.org
          </a>
          Es el sitio web corporativo del Grupo de Empresas InterMaritime,
          comprendidas por 5 entidades. Construí este sitio creando una
          plantilla personalizada de WordPress. Luego la convertí a un sitio web
          estático utilizando un plugin llamado WP2Static. El sitio está
          hospedado en una cubeta de S3 en Amazon Web Services (AWS). El costo
          de hospedaje es muy bajo, y la carga del sitio es muy rápida. La misma
          cuenta con un formulario de contacto el cual se conecta con una
          función lambda en AWS, de esta manera, el formulario puede enviar
          correos (entre otras tareas) sin la necesidad de levantar un VPS.
        </p>
        <VisitButton to="https://intermaritime.org/">
          Visita el sitio
        </VisitButton>
      </div>

      <StaticImage
        src="../assets/trabajos/intermaritime-org-screen-fullsize.png"
        className="medium-image inner-img-medium-border image-shadow border-radius-image portfolio-image"
        alt="InterMaritime Website"
      />
    </div>

    <div class="grid-content-50 align-center gap-40 space-bellow">
      <StaticImage
        src="../assets/trabajos/icsclass-org-screen-fullsize.png"
        className="medium-image inner-img-medium-border image-shadow border-radius-image portfolio-image"
        alt="ICSClass Website"
      />

      <div class="grid-item">
        <h2>ICS Class</h2>
        <p>
          <a href="https://icsclass.org/">ICSClass.org</a>
          Es un sitio web de la empresa más importante del grupo InterMaritime.
          Este sitio web lo construí con un tema personalizado, creado por mi
          persona. El tema utiliza el starter{" "}
          <a
            href="https://underscores.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            underscores
          </a>
          . El sitio cuenta con varias características como buscadores de
          entradas personalizadas entre otras. Además cuenta con un sistema de
          análisis de visitantes, un formulario de contáctenos personalizado, y
          un área para editar noticias y eventos. El sitio está hospedado en un
          servidor virtual privado (VPS). Todos los cambios al código del sitio
          se gestionan a través de git, se empujan a un repositorio privado en
          bitbucket, y luego a un repositorio limpio en el VPS.
        </p>
        <VisitButton to="https://icsclass.org/">Visita el sitio</VisitButton>
      </div>
    </div>

    <div class="grid-content-50 align-center gap-40 space-bellow">
      <div class="grid-item">
        <h2 id="wordcamp-panam-2019">WordCamp Panamá 2019</h2>
        <p>
          Este sitio fue creado para promocionar el evento que se daba por
          primera vez en la ciudad de Panamá (y en todo el país). Fue creado con
          muchas limitaciones de parte del organizador del evento WordCamp
          Central, quienes regulan todo lo que se puede o no se puede hacer en
          este sitio. El sitio sólo podía actualizarse utilizando un tema
          prefabricado o un tema totalmente desnudo. Utilicé el tema desnudo
          para poder estilizarlo a mi propia manera. Usando técnicas avanzadas
          de CSS pude hacer muchas variantes al sitio para que este fuera muy
          diferente a todos los sitios para WordCamp en el mundo. Este sitio se
          puede utilizar como plantailla para otros sitios. Es definitivamente
          único en su clase.
        </p>
        <VisitButton to="https://2019.panamacity.wordcamp.org/">
          Visita el sitio
        </VisitButton>
      </div>
      <StaticImage
        src="../assets/trabajos/wordcamp-panama-2019-screen-fullsize.png"
        className="medium-image inner-img-medium-border image-shadow border-radius-image portfolio-image"
        alt="WordCamp Panama 2019 Website"
      />
    </div>
  </PagesLayout>
)

export default Trabajos
