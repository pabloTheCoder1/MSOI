import React from 'react'
import "../styles/associati.css"
import "../styles/home.css"
import socio from "../images/socio.JPG"

const Associati = () => {
  return (
    <div className='associati'>
      <div className='mainSocio'>
        <div className='centralSocio'>
          <div>
            <div className='headline'>
              <h1 className="slide-in">Associarsi</h1>
            </div>
            <div className='chiSocio'>
              <h1 className='subHeadline'>Chi può diventare socio?</h1>
              <p>M.S.O.I. Torino è aperto a tutti i giovani, studenti 
                universitari e non, di età compresa tra i 16 ed i 30 anni.</p>
            </div>
          </div>
        </div>
        <img src={socio} alt="socio" className='socioImage'/>
      </div>
      <div className='perchèSocio'>
        <h1 className='subHeadline'>Perché diventare socio di M.S.O.I. Torino?</h1>
        <p>I soci di M.S.O.I. Torino, siano essi soci ordinari o sostenitori (vedi sotto),
          hanno diritto a partecipare a tutte le attività associative, locali e nazionali,
          per un anno accademico a partire dalla conferma ufficiale della membership, 
          la quale avviene tramite presentazione della ricevuta di avvenuto pagamento. 
          I soci ricevono inoltre regolarmente la nostra newsletter e tutti gli aggiornamenti
           professionali riguardanti il campo di interesse del Movimento. Detta newsletter include, 
           tra le altre cose:
        </p>
        <div className='subParag'>
          <p>
          • MSOInforma, una rubrica prodotta con cadenza bisettimanale contenente 
            offerte di lavoro e di internship pubblicate da organizzazioni internazionali, 
            organizzazioni non governative, imprese e società internazionali.</p>
          <p>
          • MSOI thePost, giornale online di M.S.O.I. Torino, la cui redazione è composta
              da soci del Movimento. I soci di M.S.O.I. possono collaborare alla rivista, 
              se interessati al mondo del giornalismo o se già inseriti in quest’ultimo.</p>
          <p>
          • Avvisi riguardanti eventi organizzati da SIOI, docenti inseriti a vario 
            titolo nell’Associazione e altre associazioni da tempo collaboratrici di 
            M.S.O.I. Torino.
          </p>
        </div>
        <p>
        A partire dall’Anno Associativo 2019/2020 sarà, come accennato, possibile assumere
         il ruolo di Socio Sostenitore, oltre che quello di Socio Ordinario. 
        Per ogni informazione o curiosità sulle attività del Movimento contattaci 
        attraverso i nostri canali social!
        </p>
      </div>
      <div className='come'>
        <div className='comeIstruzioni'>
          <h1 id='endingPar' className='subHeadline'>Come associarsi</h1>
          <p id='endingPar'>1 • COMPILA IL FORM <br />
          Compila il modulo di iscrizione presente a <a className="regLink" 
          href="https://docs.google.com/forms/d/e/1FAIpQLSd0MG9LqPW0ul11o77EDlCMlTO_JPd5MJ7eQ_pWACTJxAoxMw/viewform">
          questo link</a> inserendo i tuoi dati e una ricevuta dell’avvenuto versamento della quota associativa.
          </p>
          <p>2 • EFFETTUA IL PAGAMENTO <br />
            Esistono due diverse quote associative: la quota di Socio Ordinario (10€) o la quota di 
            Socio Sostenitore (15€). Il Consiglio Direttivo può decidere, inoltre, di corrispondere 
            al Socio Sostenitore un dono simbolico in segno di ringraziamento per il proprio supporto. 
            Il Socio che si avvalga della facoltà di cui al secondo capoverso non acquisisce alcuna
            facoltà o posizione diversa da quella garantita alla generalità dei Soci.<br />
            Al momento, è possibile solamente pagare via bonifico. Il pagamento deve essere 
            effettuato prima o durante la compilazione del modulo di iscrizione, in quanto ti sarà 
            richiesto di allegare la ricevuta di avvenuto versamento.
            Il bonifico bancario dovrà essere intestato a:
            </p>
            <p>“Sioi Sezione di Torino”</p>
            <p>IBAN: IT41L0306909606100000116213</p>
            <p>Causale “tesseramento MSOI – [Nome e Cognome]“</p>
            <p id='endingPar'>Una volta ricevuta conferma da parte del Direttivo dell’avvenuto pagamento, otterrai 
            lo status di Socio a tutti gli effetti con l’aggiunta al registro Soci e alla newsletter.
            </p>
            <p id='endingPar'>3 • TESSERA SOCIO M.S.O.I. TORINO <br />
            Per ricevere la tessera di Socio M.SO.I. Torino, puoi recarti al nostro 
              punto informativo tutti i mercoledì nella Stanza 3 al Primo piano della 
              Palazzina Einaudi, adiacente al Campus Luigi Einaudi in Lungo Dora Siena 100, Torino. 
              NON è necessario possedere la tessera per avere accesso ai benefici dello status di Socio.
          </p>
        </div>
        <div className='buttonSpace'>
          <button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0MG9LqPW0ul11o77EDlCMlTO_JPd5MJ7eQ_pWACTJxAoxMw/viewform">
              Associati
            </a>
          </button>
        </div>
      </div>
      <div className='rinnovo'>
        <h1 className='subHeadline'>Rinnovi</h1>
        <p>Per rinnovare la tua membership ad MSOI Torino, puoi recarti presso il
           nostro punto informativo settimanale oppure puoi effettuare il pagamento 
           tramite bonifico nelle stesse modalità indicate per il tesseramento 
           (non è necessario ricompilare il modulo di contatto).</p>
      </div>
    </div>
  )
}

export default Associati