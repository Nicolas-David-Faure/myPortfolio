
import { useSelector } from 'react-redux'
import { ActivityBar } from './components/activityBar/ActivityBar'
import './App.scss'
import Desktop from './components/desktop/Desktop'
import { Footer } from './components/footer/Footer'


function App() {
  const  {language} = useSelector(store => store.languages )

 
  return (
    <main className='main'>
      <ActivityBar language={language} />
      <Desktop language={language}  />
      <Footer language={language}/>
      <div className="background__shadow_1" />
      <div className="background__shadow_2" />

      <div className="background__shadow_3" />
      <div className="background__shadow_4" />
      <div className="background__shadow_5" />

    </main>
  )
}

export default App
