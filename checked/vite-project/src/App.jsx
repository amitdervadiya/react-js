import react from "react"
import { Provider } from "react-redux"
import Stddata from "./Redux/Stddata"
import { store } from "./app/Store"

function App() {


  return (
    <>
      {/* <Provider store={store}>
        <Stddata />
      </Provider> */}
      <Stddata/>
    </>
  )
}

export default App
