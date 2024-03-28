
import { useSelector } from 'react-redux'
import { ActivityBar } from './components/activityBar/ActivityBar'
import './App.css'
import Desktop from './components/desktop/Desktop'
import { Footer } from './components/footer/Footer'


function App() {
  const  {language} = useSelector(store => store.languages )

 
  return (
    <main className='main'>
      <ActivityBar language={language} />
      <Desktop language={language}  />
      <Footer language={language}/>
    </main>
  )
}

export default App
