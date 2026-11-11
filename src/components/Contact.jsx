import { Screen } from './Screen.jsx'

export const Contact = () => {
  const whatsappNumber = '+57 323 7976258'
  const whatsappMessage = 'Hola Sebastian, vi tu portafolio y me gustaria contactarte.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Screen title="Contacto">
      <div className="contact-container">
        <p className="contact-intro">
          ¿Tienes algún proyecto en mente, una propuesta laboral o quieres hablar de tecnología? No dudes en escribirme por cualquiera de estos canales:
        </p>

        <ul className="contact-list">
          <li>
            <a href="mailto:sebasdavid0211@gmail.com" className="contact-link">
              <span className="contact-icon">📧</span>
              <div className="contact-info">
                <strong>Correo Electrónico</strong>
                <span>sebasdavid0211@gmail.com</span>
              </div>
            </a>
          </li>
          <li>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">
              <span className="contact-icon">💬</span>
              <div className="contact-info">
                <strong>WhatsApp</strong>
                <span>Escríbeme un mensaje directo</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/SebasDavid14" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">🐙</span>
              <div className="contact-info">
                <strong>GitHub</strong>
                <span>github.com/SebasDavid14</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </Screen>
  )
}