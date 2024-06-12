import './message.css';

function Message(props) {
  return (
    <div className="message">
      <h1>Тебе сообщение, читай: '{props.text}'</h1>
    </div>
  )
}

export default Message;