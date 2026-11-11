import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Routes, Route } from "react-router"
import { NotFound } from "./components/NotFound"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Navbar />
    </>
  )
}