export const ProjectCard = ({ title, description, tags = [], status }) => {
  const statusClass = status === 'Terminado' ? 'status-completed' : 'status-in-progress'

  return (
    <article className="card">
      <div className="card-header">
        <h2>{title}</h2>
        {status && <span className={`status-badge ${statusClass}`}>{status}</span>}
      </div>
      <p className="card-text">{description}</p>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}