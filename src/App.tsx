import ToDos from './components/ToDos'
import {ContextProvider} from './context/TodoContext'


export default function App() {
  return (
    <ContextProvider>
      <ToDos />
    </ContextProvider>
  )
}
