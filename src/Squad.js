import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Quest from "./Quest";

const Squad = ({match}) => {
  const storageName = 'answeredQuest'
  const squad = match.params.squadName
  const [actualQuest, setActualQuest] = useState(0)
  const [answeredQuest, setAnsweredQuest] = useState(localStorage[storageName] || [])

  const questlist = [
    {id: 0, qr: 'ghepardo', password: 'ghepardo'},
    {id: 1, qr: 'lince', password: 'lince'},
    {id: 2, qr: 'serpente', password: 'serpente'},
    {id: 3, qr: 'serpente', password: 'serpente'},
    {id: 4, qr: 'orso', password: 'orso'},
    {id: 5, qr: 'lupo', password: 'lupo'},
    {id: 6, qr: 'piovra', password: 'piovra'},
    {id: 7, qr: 'coccodrillo', password: 'coccodrillo'},
    {id: 8, qr: 'gufo', password: 'gufo'},
  ];

  const handleQuestAnswer = (questId) => {
    const answeredList = [...answeredQuest, questId]
    setAnsweredQuest(answeredList)
    localStorage.setItem(storageName, answeredList)
  }

  return (
    <>
      {console.log(squad)}
      {console.info(answeredQuest)}
      {answeredQuest.length >= 9
        ? <div className="message is-success">
          <div className="message-header">
            <p>Complimenti! Gioco finito!</p>
          </div>
          <div className="message-body">
            Un occhio di Lince <br/>
            Riflessi di Gatto <br/>
            Sei un gran cacciatore <br/>
            il gioco e' fatto<br/>
          </div>
        </div>
        : <Quest id={actualQuest}
                 qr={questlist[actualQuest].qr}
                 password={questlist[actualQuest].password}
                 answerQuest={handleQuestAnswer}
        />
      }
    </>
  )
}

Squad.propTypes = {}

export default Squad