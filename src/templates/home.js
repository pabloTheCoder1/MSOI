import {React } from 'react'
import { useWindowSize } from "@uidotdev/usehooks";
import "../styles/home.css"
import main from "../images/sfondo.JPG"
import main2 from "../images/sfondo2.JPG"

const Home = () => {
  const size = useWindowSize();
  function mainSize(){
    if (size.width > 1030){
      return main
    }
    else if (size.width <= 1030 && size.width > 790){
      return main2
    }
    else{
      return main
    }
  }
  return (
    <div className='Home'>
      <div className="nameAndPic">
        <div className='name'>
          <div>
            <div className='headline'>
              <h1 className="slide-in">Il Movimento Studentesco per l'Organizzazione Internazionale</h1>
            </div>
            <p>È la Sezione giovanile ed universitaria della
              Società Italiana per l'Organizzazione Internazionale (S.I.O.I.)</p>
          </div>
        </div>
        <img src={mainSize()} alt="" className='mainImage'/>
      </div>
      <div className='presentazione'>
        <h1>M.S.O.I. Torino</h1>
        <p>È il comitato locale M.S.O.I. situato a Torino, con sede al Campus 
          delle Nazioni Unite e che puoi incontrare ogni Mercoledì presso la Stanza
            3 al primo piano della Palazzina Einaudi.</p>
      </div>
    </div>
  )
}

export default Home
