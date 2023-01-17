import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublicRoute from './pages/public/PublicRoute'
import PrivateRoute from "./pages/private/PrivateRoute"
import AuthGard from './_helpers/AuthGuard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
          <Route path="/user/*" element={
            <AuthGard>
              <PrivateRoute />
            </AuthGard>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
