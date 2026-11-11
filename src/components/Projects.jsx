import { Screen } from "./Screen"
import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    id: 1,
    title: 'EjeLaboral',
    description: 'Plataforma web para conectar trabajadores independientes y freelancers con clientes regionales.',
    tags: ['Java', 'TypeScript', 'MySQL', 'Node.js'],
    status: 'En proceso'
  },
  {
    id: 2,
    title: 'Mi portafolio',
    description: 'Sitio personal interactivo para mostrar proyectos y perfil profesional.',
    tags: ['React', 'Vite', 'CSS3'],
    status: 'Terminado'
  },
  {
    id: 3,
    title: 'Lista de tareas',
    description: 'Aplicación web para la gestión de pendientes y control de tareas diarias.',
    tags: ['JavaScript', 'HTML5', 'CSS'],
    status: 'Terminado'
  },
  {
    id: 4,
    title: 'Calculadora Móvil',
    description: 'Calculadora con interfaz adaptativa para dispositivos móviles.',
    tags: ['JavaScript', 'CSS Grid'],
    status: 'Terminado'
  }
]

export const Projects = () => {
  return (
    <Screen title="Mis proyectos">
      <div className="card-list">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            status={project.status}
          />
        ))}
      </div>
    </Screen>
  )
}