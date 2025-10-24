const ChatInput = ({ newMessages, setnewMessages }) => {

  const [inputValue, setInputValue] = React.useState('');

  function saveInputValue(event) {
    setInputValue(event.target.value);
  }

  function sendMessage() {

    if(inputValue === ''){
      alert('Type a message!');
      return;
    }

    setnewMessages([
      ...newMessages, {
        message: inputValue,
        sender: 'user',
        id: crypto.randomUUID()
      }, {
        message: Chatbot.getResponse(inputValue),
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputValue('')

  }

  return (
    <div id="message-box" className="flex flex-row flex-nowrap items-center justify-center w-full gap-[1rem]">
      <input 
        className="w-[35%] h-[3rem] border-none bg-fuchsia-100 rounded-[1rem] font-medium p-[.4rem]"
        placeholder='Send a message!'
        onChange={saveInputValue}
        value={inputValue}
      />
      <button 
      className="w-[5rem] h-[3rem] bg-purple-700 text-white rounded-[1rem] p-[.4rem] font-bold hover:bg-purple-950 hover:cursor-pointer hover:duration-[1s]"
      onClick={sendMessage}>Send</button>
    </div>
  );
}