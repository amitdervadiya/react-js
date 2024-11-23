import DataApi from './Component/DataApi'
import { Provider } from 'react-redux'
import './App.css'
import { store } from '../app/store'
import MoneyManager from './Component/MoneyManager'

function App() {


  return (
    <>
      <Provider store={store}>
        {/* <DataApi /> */}
        <MoneyManager />
      </Provider>,
    </>
  )
}





export default App
