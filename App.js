import logo from './logo.svg';
import './App.css';
import Message from './components/message';

const messageUser = 'Хай, напиши мне в ответ';
function App() {
  return (
    <div className="App">
      <Message text={messageUser} />
    </div>
  );
}

export default App;
