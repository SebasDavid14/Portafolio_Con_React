import { Screen } from "./Screen"
import { ProjectCard } from "./ProjectCard"

const projects = [
    {
        id: 1,
        title: 'Mi portafolio',
        description: 'Sitio personal hecho con React y Vite',
        tags: ['React', 'Vite', 'CSS']
    },
    {
        id: 2,
        title: 'Lista de tareas',
        description: 'Aplicacion para organizar pendientes',
        tags: ['JavaScript', 'HTML']
    },
    {
        id: 3,
        title: 'Calculadora',
        description: 'Calculadora basica con diseño movil',
        tags: ['JavaScript', 'CSS']
    }
]

export const Projects = () => {
  return (
    <Screen title="Mis proyectos">
        <div className="card-list">
            {
                projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                    />
                ))
            }
        </div>
    </Screen>
  )
}
