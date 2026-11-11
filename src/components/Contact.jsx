import {Screen} from './Screen.jsx'

export const Contact = () => {
  return (
    <Screen title="Contacto">
        <ul className="contact-list">
            <li>
                <a href="mailto:sebasdavid0211@gmail.com" className="contact-link">
                    Correo: sebasdavid0211@gmail.com
                </a>
            </li>
            <li>
                <a href="https://github.com/SebasDavid14" className="contact-link">
                    GitHub: SebasDavid14
                </a>
            </li>
        </ul>
    </Screen>
  )
}
