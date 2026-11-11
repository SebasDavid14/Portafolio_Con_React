export const Screen = ({ title, children }) => {
  return (
    <main className="screen">
        <h1 className="screen-tittle">{ title }</h1>
        { children }
    </main>
  )
}
