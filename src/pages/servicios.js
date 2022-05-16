import * as React from "react"
import PagesLayout from "../components/pages-layout.js"
import AlaMedida from "../components/arte-servicios/a-la-medida.js"
import WebProfesional from "../components/arte-servicios/web-profesional.js"
import WebRapida from "../components/arte-servicios/web-rapida.js"
import WebResponsive from "../components/arte-servicios/web-responsive.js"

const Servicios = () => (
  <PagesLayout title="Mis servicios">
    <h1 className="centered">Mis Servicios</h1>
    <div className="pagina-servicios">
      <div class="grid-content-50 align-center gap-40 space-bellow">
        <div class="grid-item">
          <h2>Sitios Web A la Medida de Tu Marca</h2>
          <p>
            Mis sitios web son creados utilizando tu contenido y tu marca como base.
            <strong>Tu contenido no se debe adaptar a una plantilla</strong>, el diseño de tu
            marca debe ser el punto de partida para el diseño de tu sitio web. <strong>
              Un
              sitio web adaptado a tus productos y servicios convierte más visitantes
              en clientes.
            </strong> Tu sitio web no sólo será único dentro del inmenso mar de
            sitios web creados con plantillas, si no que tendrá más coherencia con
            tu marca, lo que hará que <strong>
              tu sitio sea un lugar extraordinario para
              tus visitantes.
            </strong>
          </p>
        </div>
        <AlaMedida />
      </div>
      <div class="grid-content-50 align-center gap-40 space-bellow">
        <WebProfesional />
        <div class="grid-item">
          <h2>Sitios Web Profesionales</h2>
          <p>
            El sitio web de tu empresa, o tu blog personal, habla mucho de tu
            marca. Es importante que{" "}
            <strong>tu sitio web represente tu producto o servicio</strong> de la
            mejor manera. No sólo debe tener mucha estética, si no que también
            debe estar siempre disponible, sin importar desde qué dispositivo lo
            visiten. Además tu sitio debe
            <strong>
              aparecer en las primeras página de los buscadores como Google.
            </strong>{" "}
            Mi promesa es que tu sitio web sea un sitio web creado
            profesionalmente, creado utilizando las mejores prácticas de la
            industria. Un sitio web creado profesionalmente, siguiendo las mejores
            prácticas, <strong>atrae y mantiene más visitantes.</strong>
          </p>
        </div>
      </div>
      <div class="grid-content-50 align-center gap-40 space-bellow">
        <div class="grid-item">
          <h2>Sitios Web Que Cargan rápido</h2>
          <p>
            Una de las características más importantes de un sitio web creado
            profesionalmente es que es muy rápido al cargar. Utilizando las
            últimas y más avanzadas tecnologías te puedo garantizar que{" "}
            <strong>
              tu sitio web será mucho más rápido que el de tus competidores.
            </strong>{" "}
            Esto no sólo es beneficioso porque nos gusta la velocidad, si no
            porque **un sitio que carga muy rápido le gusta mucho a los motores de
            búsqueda como Google**, __estarás en las primeras páginas de los
            buscadores__ sin duda. Además de crear sitios web rápidos están
            **hospedados en una red distribuidas de servidores que sirven el
            contenido de tu sitio a los usuarios en el menor tiempo posible**, ya
            que siempre están muy cerca de ellos. Tus clientes les encantará tu
            sitio web o aplicación.
          </p>
        </div>
        <WebRapida />
      </div>
      <div class="grid-content-50 align-center gap-40 space-bellow">
        <WebResponsive />
        <div class="grid-item">
          <h2>Sitios Web que se Adaptan a Cualquier dispositivo</h2>
          <p>
            En nuestros tiempos es muy importante tener un sitio web que se vea
            bien y cargue rápido en dispositivos móviles. **Tus clientes visitarán
            tu sitio web desde sus celulares**. Es por esto que me dedico a que
            **tu sitio sea muy estético y rápido para los celulares** desde el
            inicio y luego adaptarlo a pantallas grandes como las de las
            computadoras de escritorio. Este tipo de desarrollo se llama{" "}
            <em>"móviles primero"</em> y es uno de los más importantes estándares
            que sigo como diseñador y programador.{" "}
            <strong>
              Tu sitio web será de alta calidad y cargará muy rápido para personas
              que tienen conectividad baja (como 3G).
            </strong>{" "}
            Tu sitio web se comportará como una aplicación móvil.
          </p>
        </div>
      </div>
    </div>
  </PagesLayout>
)

export default Servicios
