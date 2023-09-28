import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import './App.css'

export default function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, function(err, url) {
        setQrcodeLink(url);
      })
  }
 
  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value)
  }

  return (
    <div className='wrapper'>
      <div className="container">
        <div className='qrcode'>
          <QRCode
            value={link}
            className='QRCode'
          />
        </div>
        <input
          className='input'
          placeholder='Digite seu link'
          value={link}
          onChange={ (e) => handleQrcode(e)}
        />
        <a className='link' href={qrcodeLink} download={`qrcode.png`}>Download QR-Code</a>
      </div>
    </div>
  )
}


