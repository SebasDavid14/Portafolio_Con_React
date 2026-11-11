import { Screen } from './Screen.jsx'

export const Skills = () => {
  return (
    <Screen title="Habilidades Técnicas">
      <div className="skills-container">
        <p className="skills-intro">
          Competencias técnicas y herramientas desarrolladas durante mi formación en análisis y desarrollo de software:
        </p>
        
        <div className="skill-category">
          <h3>Frontend & Diseño</h3>
          <ul className="tag-list">
            <li className="tag">React / JSX</li>
            <li className="tag">TypeScript / JavaScript</li>
            <li className="tag">HTML5 & Semantic CSS</li>
            <li className="tag">Diseño UI / UX Base</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend & Bases de Datos</h3>
          <ul className="tag-list">
            <li className="tag">Java & POO</li>
            <li className="tag">Node.js con Express</li>
            <li className="tag">MySQL & MariaDB</li>
            <li className="tag">APIs REST</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Herramientas & DevOps</h3>
          <ul className="tag-list">
            <li className="tag">Git & GitHub Flow</li>
            <li className="tag">Docker Desktop</li>
            <li className="tag">Postman Client</li>
            <li className="tag">Visual Studio Code</li>
          </ul>
        </div>
      </div>
    </Screen>
  )
}