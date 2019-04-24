import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Quest from "./Quest";

const Squad = ({match}) => {
  const storageName = 'answeredQuest'
  const squad = match.params.squadName
  const [answeredQuest, setAnsweredQuest] = useState( [])
  const [actualQuest, setActualQuest] = useState(Math.floor(Math.random() * 8))

  const questlist = [
    {id: 0, qr: 'ghepardo', password: 'ghepardo'},
    {id: 1, qr: 'lince', password: 'lince'},
    {id: 2, qr: 'serpente', password: 'serpente'},
    {id: 3, qr: 'orso', password: 'orso'},
    {id: 4, qr: 'lupo', password: 'lupo'},
    {id: 5, qr: 'piovra', password: 'piovra'},
    {id: 6, qr: 'coccodrillo', password: 'coccodrillo'},
    {id: 7, qr: 'gufo', password: 'gufo'},
  ];
  const [questToAnswer, setQuestToAnswer] = useState(questlist)

  const handleQuestAnswer = (questId) => {
    const answeredList = [...answeredQuest, questId];
    const newQuestList = questToAnswer.filter(function( obj ) {
      return obj.id !== questId;
    });
    setQuestToAnswer(newQuestList)

    setAnsweredQuest(answeredList);
    localStorage.setItem(storageName, answeredList)
    setActualQuest(Math.floor(Math.random() * (questToAnswer.length - 1)))
  };

  return (
    <>
      {console.log(actualQuest)}
      {console.info(answeredQuest)}
      {console.log(questToAnswer)}
      {answeredQuest.length >= 8
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
        : <Quest id={questToAnswer[actualQuest].id}
                 qr={questToAnswer[actualQuest].qr}
                 password={questToAnswer[actualQuest].password}
                 answerQuest={handleQuestAnswer}
        />
      }
    </>
  )
}

Squad.propTypes = {}

export default Squad