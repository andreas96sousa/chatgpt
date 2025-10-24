
const App = () => {
    const messages = [];
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
