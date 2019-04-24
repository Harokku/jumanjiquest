import React, {useState} from 'react'
import PropTypes from 'prop-types'
import QrReader from "react-qr-reader"
import "./Quest.scss"

const Quest = (props, {match}) => {
  const [isQrOpen, setQrOpen] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(false)
  const [textAnswer, setTextAnswer] = useState('')

  const qrReaderStyle = {
    width: '300px'
  };

  const toggleQrReader = () => {
    setQrOpen(!isQrOpen)
  };

  const handleAnswer = (data) => {
    if (data !== null) {
      if (data.toLowerCase() === props.password.toLowerCase()) {
        console.info("Rigth answer")
        props.answerQuest(props.id)
      } else {
        setAnswerStatus(true)
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="level is-mobile">
          <div className="level-item">
            <figure className="image">
              <img src={process.env.PUBLIC_URL + props.qr + '.jpeg'}/>
            </figure>
          </div>
        </div>

        {answerStatus
          ? <div className="message is-danger">
            <div className="message-header">
              <p>Risposta sbagliata!</p>
              <button className="delete" aria-label="delete" onClick={() => setAnswerStatus(false)}/>
            </div>
            <div className="message-body">
              Errore di mira, sei stato sbadato <br/>
              Sono spiacente, animale sbagliato
            </div>
          </div>
          : null
        }

        < div className="level is-mobile">
          <div className="level-item">
            <button className="button" onClick={() => toggleQrReader()}>
              {isQrOpen
                ? 'Chiudi lettore'
                : 'Apri lettore'
              }
            </button>
          </div>
        </div>
        {isQrOpen
          ? <div className="level is-mobile">
            <div className="level-item"><QrReader
              style={qrReaderStyle}
              onError={(err) => console.error(err)}
              onScan={handleAnswer}
            /></div>
          </div>
          : null
        }

        <div className="level is-mobile">
          <div className="level-item">
            <div className="field has-addons">
              <div className="control">
                <input className="input"
                       type="text"
                       placeholder="Scrivi la parola trovata"
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => handleAnswer(textAnswer)}>
                  Controlla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Quest.propTypes = {
  id: PropTypes.number,
  qr: PropTypes.string,
  password: PropTypes.string,
  answerQuest: PropTypes.func,
}

export default Quest