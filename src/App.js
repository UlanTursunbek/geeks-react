import { Navigation } from "./components/Navigation"
import { Routes, Route } from "react-router-dom"
import { PageIndex } from "./pages/Index"
import { PageAbout } from "./pages/About"
import { ReduxPage } from "./pages/Redux"

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index path='/' element={<PageIndex />} />
        <Route path='/redux' element={<ReduxPage />} />
        <Route path='/about/:id' element={<PageAbout />} />
      </Routes>
    </>
  )
}
