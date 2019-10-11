import React, {Fragment} from 'react';
import Curso from './Curso'
import './styles/styles.scss'


const cursos = [
  {
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  },

  {
    "title": "Drupal desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/SEO%20Avanzado.png",
    "price": 40,
    "profesor": "Beto Quiroga"
  },

  {
    "title": "Go desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Enrutammiento.png",
    "price": 50,
    "profesor": "Alexys Lozada"
  },

  {
    "title": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/PremiereDesdeCero.png",
    "price": 10,
    "profesor": "Alvaro felipe"
  },
]


const App = () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso React</p>
          <p> Roberto Palacios</p>
          <a href="https://ed.team" className="button">Entrar</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    {
      cursos.map( curso => <Curso title={curso.title} price={curso.price} profesor={curso.profesor} /> )
    }
  </div>

  </Fragment>
)

export default App;
