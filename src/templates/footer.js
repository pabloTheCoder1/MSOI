import React from 'react'
import instagram from "../images/instagram.png"
import mail from "../images/mail.png"
import facebook from "../images/facebook.png"
import phone from "../images/telephone.png"
import logoBianco from "../images/logoBianco.png"
import "../styles/footer.css"


const Footer = () => {
  return (
    <div className="footer">
        <div className='logoSpace'>
            <img src={logoBianco} alt="logo" />
        </div>
        <div className='infos'>
            <div className='instagram'>
                <img src={instagram} alt="instaLogo" />
                <p>Instagram: <a href="https://www.instagram.com/msoitorino/">@msoitorino</a></p>
            </div>
            <div className='facebook'>
                <img src={facebook} alt="facebookLogo" />
                <p>Facebook: <a href="https://www.facebook.com/msoitorino">@msoitorino</a></p>
            </div>
            <div className='instagram2'>
                <img src={instagram} alt="instaLogo" />
                <p>Instagram eventi: <a href="https://www.instagram.com/eumodeltorino/">@eumodeltorino</a></p>
            </div>
        </div>
        <div className='infos'>
            <div className='email'>
                <img src={mail} alt="mailLogo" />
                <p>Mail: <a href="mailto:msoi.torino@gmail.com">msoi.torino@gmail.com</a></p>
            </div>
            <div className='email'>
                <img src={phone} alt="phoneLogo" />
                <p>telefono: 011-6936309</p>
            </div>
        </div>
    </div>
  )
}

export default Footer