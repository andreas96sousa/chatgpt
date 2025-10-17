
const ChatMessage = ({ message, sender }) => {
  
  const chatMessageImageStyle = {
    width: '50px'
  }

  const chatMessageUser = (
    sender === 'user' &&
    <img
      src="./src/assets/user.png"
      style={chatMessageImageStyle}
    />
  );

  const chatMessageRobot = (
    sender === 'robot' &&
    <img
      src="./src/assets/bot.png"
      style={chatMessageImageStyle}
    />
  );


  return (
    <div className={sender}>
      { chatMessageRobot }
      { message }
      { chatMessageUser }
    </div>
  );
}
