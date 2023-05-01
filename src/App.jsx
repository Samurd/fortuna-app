// HOOKS //

import { useState } from 'react'

// CSS //

import './assets/css/App.css'

// IMAGES //

import background from './assets/images/fondo1.png'
import background2 from './assets/images/fondo2.png'
import background3 from './assets/images/fondo3.png'
import background4 from './assets/images/fondo4.png'

// DATA //

import phrases from './assets/data/phrases.json'

// Components //

import PhraseCard from './assets/components/PhraseCard'
import Author from './assets/components/Author'

function App() {
  const imgs = [background, background2, background3, background4];

  document.body.style = `background: url(${imgs[Math.floor(Math.random() * imgs.length)]}); background-repeat:no-repeat;
  background-position: center;
  background-size: cover;`

  const [phraseindex, setIndex] = useState(0)

  const changeIndex = () => {
    setIndex((phraseindex + 1) % phrases.length)
  }

  return (
    <>
    <div className="title">
    <h1>GALLETAS DE LA FORTUNA</h1>
    </div>
    <div className="container-btn">
     <button type='button' className='btn-change' onClick={changeIndex}>Probar mi suerte</button>
     </div>
    <PhraseCard 
     data={phrases[phraseindex]}
     />
     <Author 
     data={phrases[phraseindex]}
     />
    </>
  )
}

export default App
