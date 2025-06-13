import { Provider } from 'react-redux'
import Todo from './components/todo'
// import './App.css'
import { store } from './app/store'
import "./todo.css"

function App() {
  

  return (
    <>

      <Provider store={store}>
        <Todo/>
      </Provider>
      
    </>
  )
}

export default App
