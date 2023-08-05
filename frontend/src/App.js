import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import UserRoutes from './Routes/UserRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRoutes/>}/>
        <Route path='/admin/*' element={<AdminRoutes/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
