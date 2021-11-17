import MainRoutes from './MainRoutes'
import './App.css'
import AuthContextProvider from './Contexts/AuthContext'
import ProductsContextProvider from './Contexts/ProductsContext'

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </ProductsContextProvider>
    </div>
  )
}
export default App
