import { Screen } from './Screen'

export const Home = () => {
  const name = 'Sebastian David'
  const role = 'Aprendiz'

  return (
    <Screen title="Inicio">
      {/* Cabecera del perfil horizontal */}
      <section className="profile-header">
        <div className="profile-info">
          <h2>{ name }</h2>
          <p className="hero-role">{ role }</p>
          <p className="hero-bio">
            Mi primer portafolio en React con jsx. Enfocado en desarrollo de software y web.
          </p>
          {/* Botón interactivo para simular descarga de CV */}
          <a 
            href="#cv" 
            onClick={(e) => { e.preventDefault(); alert('¡Próximamente descarga de CV disponible!'); }} 
            className="cv-button"
          >
            📄 Descargar CV
          </a>
        </div>
        <div className="avatar">SD</div>
      </section>

      {/* Datos adicionales de Inicio */}
      <section className="about-section">
        <h3>Acerca de mí</h3>
        <p className="hero-text">
          Apasionado por la tecnología, el análisis de software y la creación de interfaces dinámicas e interactivas.
        </p>
      </section>

      <section className="skills-highlight">
        <h3>Tecnologías Principales</h3>
        <ul className="tag-list">
          <li className="tag">React</li>
          <li className="tag">JavaScript</li>
          <li className="tag">HTML5 / CSS3</li>
          <li className="tag">Git & GitHub</li>
        </ul>
      </section>
    </Screen>
  )
}