
import { useSelector } from 'react-redux'
import { ActivityBar } from './components/activityBar/ActivityBar'
import './App.css'
import Desktop from './components/desktop/Desktop'


function App() {
  const  {language} = useSelector(store => store.languages )

  return (
    <main className='main'>
      <ActivityBar language={language} />
      <Desktop language={language}  />
    </main>
  )
}

export default App
