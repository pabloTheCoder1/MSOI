import React from 'react'
import "../styles/noi.css"
import "../styles/home.css"
import { useWindowSize } from "@uidotdev/usehooks";
import storia from  "../images/storia.JPG"
import storia2 from  "../images/storia2.JPG"
import conferenza from  "../images/conferenza.jpg"
import conferenza2 from  "../images/conferenza2.jpg"

const Noi = () => {
  const size = useWindowSize();
  function mainSize(pic, pic2){
    if (size.width > 1030){
      return pic
    }
    else if (size.width <= 1030 && size.width > 790){
      return pic2
    }
    else{
      return pic
    }
  }
  return (
    <div className='noi'>
      <div className='headline' id="chiSiamo">
        <h1 className="slide-in">Chi siamo?</h1>
      </div>
      <div className='MSOI'>
        <h1 className='subHeadline'>Cos'è MSOI?</h1>
        <p>Il Movimento Studentesco per l’Organizzazione Internazionale (M.S.O.I.) 
          è un’associazione creata da studenti e rivolta a studenti, impegnata a 
          promuovere la diffusione della cultura internazionalistica e a valorizzarne 
          i principi, i contenuti e le finalità.  </p>
      </div>
      <div className='storia'>
        <h1 className='subHeadline'>La nostra storia</h1>
        <p>Nata nel 1949, M.S.O.I. rappresenta la sezione giovanile ed universitaria 
          della Società Italiana per l’Organizzazione Internazionale (S.I.O.I.), ente 
          di cui fanno parte docenti ed esperti in diversi campi, inerenti per lo più 
          all’ambito internazionalistico, e che ha tra i propri scopi la formazione 
          diplomatica e la ricerca sui temi dell’organizzazione e del diritto internazionale. 
        </p>
        <p>Inoltre, M.S.O.I. è membro italiano del World Forum of United Nations Associations Youth 
          (WFUNA YOUTH), l’organo che rappresenta e coordina tutti i movimenti giovanili 
          per le Nazioni Unite nel mondo.
        </p>
      </div>
      <div className="nameAndPic">
        <div className='name'>
          <div>
            <h1 className='subHeadline'>MSOI in Italia</h1>
            <p>M.S.O.I. si è da sempre posto come punto di riferimento e associazione d’interesse
              per studenti provenienti da tutta Italia accomunati dall’interesse per la 
              cooperazione e le relazioni internazionali. Il Movimento è, infatti, 
              diffuso capillarmente a livello nazionale tramite i diversi gruppi di 
              Gorizia, Milano, Napoli, Roma e Torino. 
            </p>
          </div>
        </div>
        <img src={mainSize(storia, storia2)} alt="" className='mainImage' id='storiaImg'/>
      </div>
      <div className='obiettivi'>
        <div className='conferenza'>
          <h1 className='subHeadline'>I nostri obiettivi</h1>
          <p>Ogni anno M.S.O.I. Torino organizza conferenze, tavole rotonde, simulazioni, 
            seminari e viaggi studio nel quadro di iniziative rivolte ai soci per stimolare 
            la discussione, l’apprendimento e lo scambio di idee attorno ai temi di maggior 
            interesse nell’ambito del diritto e della politica internazionale.
          </p>
          <p>
            M.S.O.I. Torino costituisce non solo un’opportunità unica per entrare in 
            contatto con un ampio network di esperti, docenti e studenti, ma anche una
            straordinaria esperienza per condividere interessi e passioni con altri studenti
            appassionati di tematiche internazionalistiche, nonché un’importante piattaforma
            di apprendimento e palestra per i futuri esperti ed operatori internazionali.
          </p>
        </div>
        <img src={mainSize(conferenza, conferenza2)} alt="conferenza" id="conferenzaImg"/>
      </div>
      <div className='direttivo'>
        <h1>Il Direttivo</h1>
        <p>l cuore organizzativo pulsante del M.S.O.I. Torino è rappresentato dal Consiglio
           Direttivo, composto dalle cariche di Segretario, Vice-Segretario, Tesoriere e 
           altri consiglieri con varie funzioni. Tale Consiglio si rinnova ogni anno e le selezioni
            per i membri del nuovo Direttivo avvengono, per quanto riguarda la Sezione di Torino,
            solitamente a fine maggio.</p>
        <p>Le riunioni, con cadenza regolare, si svolgono presso la sede del movimento nel
            Campus ONU di Torino, da settembre a inizio giugno. Gli incontri sono aperti a 
            tutti i soci, che possono intervenire e proporre nuove iniziative, contribuendo 
            direttamente e concretamente alla pianificazione delle attività del Movimento o 
            al loro progressivo miglioramento.</p>
        <p>Chiunque sia interessato al Movimento, o anche soltanto a scoprire come lavora,
            concretamente, M.S.O.I. Torino, può ricevere maggiori informazioni a riguardo 
            mandando una mail al nostro indirizzo <a href="mailto:msoi.torino@gmail.com"
            className='regLink'>msoi.torino@gmail.com</a>
          </p>
      </div>
    </div>
  )
}

export default Noi
