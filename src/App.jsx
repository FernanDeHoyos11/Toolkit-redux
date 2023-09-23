
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice'
import { useState } from 'react'

function App() {

  const {counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const [num, setNum] = useState(0)

  const sum = () => {
    setNum(num + 1)
  }

  return (
    <>
      <p> count is {counter}</p>
      <hr />
      <div className="card">
        <button onClick={ () => dispatch(increment())}>
          Increment
        </button>

        <button onClick={ () => dispatch(decrement())}>
          Decrement
        </button>
      

        <button onClick={ sum}>
        Valor increment {num}
        </button>
        
       
        <button onClick={ () => dispatch(incrementBy(num))}>
        Increment By 3
        </button>
      </div>
    </>
  )
}

export default App
