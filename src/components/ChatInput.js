const ChatInput = ({ newMessages, setnewMessages}) => {
  const [inputValue, setinputValue] = React.useState("");


  function saveInputValue(e) {
    setinputValue(e.target.value);
  }


  function sendMessage() {
    setnewMessages([
      ...newMessages,
      {
        message: inputValue,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <div id="message-box">
      <input
        id="inputMessage"
        placeholder="Send a message!"
        onChange={saveInputValue}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
