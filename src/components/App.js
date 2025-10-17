
const App = () => {
    const messages = [
    {
      message: "Hello!",
      sender: "user",
      id: crypto.randomUUID(),
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: crypto.randomUUID(),
    },
    {
      message: "Flip a coin.",
      sender: "user",
      id: crypto.randomUUID(),
    },
    {
      message: "Sure! You got tails!",
      sender: "robot",
      id: crypto.randomUUID(),
    },
  ];
    const [newMessages, setnewMessages] = React.useState(messages);
  return (
    <>
      <ChatInput 
        newMessages = {newMessages}
        setnewMessages = {setnewMessages}
      />
      <ChatMessages 
        newMessages = {newMessages}
        setnewMessages = {setnewMessages}
      />
    </>
  );
}
