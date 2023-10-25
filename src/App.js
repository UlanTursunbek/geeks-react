import { Navigation } from "./components/Navigation"
import { Routes, Route } from "react-router-dom"
import { PageIndex } from "./pages/Index"
import { PageAbout } from "./pages/About"

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index path='/' element={<PageIndex />} />
        <Route path='/about/:id' element={<PageAbout />} />
      </Routes>
    </>
  )
}
