import imagen from "../../public/img/nosotros.jpg";
import styles from '../styles/nosotros.css';

export function meta(){
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Praesent risus mi, pharetra ac venenatis et, mattis ut nisl. Nulla a
            faucibus lectus. Fusce euismod aliquet lectus, in sagittis tortor
            fringilla eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aliquam quis blandit dolor. Proin finibus fringilla augue, non
            egestas magna. Quisque at quam ut quam suscipit iaculis at quis
            neque. Nullam quis purus sapien. Pellentesque at lobortis justo.
            Donec placerat bibendum elit a porta. Sed mattis massa vel felis
            finibus egestas. Cras eu nisl at sapien lacinia laoreet. In hac
            habitasse platea dictumst.
          </p>

          <p>
            Praesent risus mi, pharetra ac venenatis et, mattis ut nisl. Nulla a
            faucibus lectus. Fusce euismod aliquet lectus, in sagittis tortor
            fringilla eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aliquam quis blandit dolor. Proin finibus fringilla augue, non
            egestas magna. Quisque at quam ut quam suscipit iaculis at quis
            neque. Nullam quis purus sapien. Pellentesque at lobortis justo.
            Donec placerat bibendum elit a porta. Sed mattis massa vel felis
            finibus egestas. Cras eu nisl at sapien lacinia laoreet. In hac
            habitasse platea dictumst.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
