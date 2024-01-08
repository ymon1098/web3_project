import './App.css'
import Welcome from './components/Welcome'
import Transactions from './components/Transactions'

const App = () => {
  return (
    <>
      <div>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Welcome />
        <Transactions />
      </div>
    </>
  )
}

export default App
