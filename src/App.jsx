import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Routes, Route } from "react-router"
import { NotFound } from "./components/NotFound"
import { Navbar } from "./components/Navbar"

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Navbar />
    </>

  )
}
