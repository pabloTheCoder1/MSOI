import React from 'react'
import "../styles/home.css"

const Attività = () => {
  return (
    <div className='attività'>
      <div className='conferenze'>
        <div className='headline'>
          <h1 className="slide-in">Attività</h1>
        </div>
        <div className='conferenzePar'>
          <p>Durante l’anno accademico M.S.O.I. Torino organizza conferenze su
            tematiche di portata internazionale, integrando di volta in volta 
            prospettive giuridiche, politologiche, economiche e altro ancora.</p>
          <p>Grazie al contributo della S.I.O.I. Piemonte – Valle d’Aosta e di 
            accademici, funzionari e diplomatici, ci impegniamo nell’offrire al 
            pubblico spunti di approfondimento e riflessione sulle principali 
            questioni concernenti la comunità internazionale, sia per attualità
            che per importanza storica, facendo perno sulla dinamicità e 
            reattività del contesto torinese.</p>
          <p>A conferenze di più ampio respiro, pensate in un’ottica prevalentemente
            divulgativa non solo per l’ambito accademico, ma anche per il grande 
            pubblico, affianchiamo momenti seminariali, studiati per stimolare il 
            dibattito e lo scambio di idee tra studenti.</p>
        </div>
      </div>
    </div>
  )
}

export default Attività