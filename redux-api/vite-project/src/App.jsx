import DataApi from './Component/DataApi'
import { Provider } from 'react-redux'
import './App.css'
import { store } from '../app/store'

function App() {


  return (
    <>
      <Provider store={store}>
        <DataApi />
      </Provider>,
    </>
  )
}





export default App
