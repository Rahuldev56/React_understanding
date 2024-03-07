

import './App.css'
import Card from './components/Card';

function App() {
// props  we passes in generally expect variable and strings
// variables  can be array ,objector may be a function.

  return (
    <>
<h1 className='bg-green-400 text-black p-4
rounded-xl mb-4'>Tailwind Test</h1>

<Card username="Rahul Dev" btnTxt="click me"/>


    </>
  )
}

export default App
