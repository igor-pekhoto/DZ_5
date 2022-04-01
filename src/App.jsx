import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Main from './components/Main/Main'
import About from './components/About/About'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import Phones from './components/Phones/Phones'
import PageNotFound from './components/404/404'
import PhonesDetail from './components/Phones/PhonesDetail/PhonesDetail'

const App = () => (

  <BrowserRouter>
    <Header />
    <div className="container py-5">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:phonesId" element={<PhonesDetail />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </BrowserRouter>

)

export default App
