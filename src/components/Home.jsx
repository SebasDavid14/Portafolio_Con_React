import { Screen } from './Screen'

export const Home = () => {
    const name = 'Sebastian David'
    const role = 'Aprendiz'
  return (
    <Screen title="Inicio">
        <section className="hero">
            <div className="avatar">SD</div>
            <h2>{ name }</h2>
            <p className="hero-role">{ role }</p>
            <p>
                Mi primer portafolio en React con jsx.
            </p>
        </section>
    </Screen>
  )
}
