const ChatMessage = ({ message, sender }) => {
  const chatMessageImageStyle = {
    width: "50px",
  };

  const chatMessageUser = sender === "user" && (
    <img
      className="flex flex-row flex-nowrap items-center gap-[10px]"
      src="./src/assets/user.png"
      style={chatMessageImageStyle}
    />
  );

  const chatMessageRobot = sender === "robot" && (
    <img
      className="flex flex-row flex-nowrap items-center gap-[10px]"
      src="./src/assets/bot.png"
      style={chatMessageImageStyle}
    />
  );

  return (
    <>
      {sender === "robot" && (
        <div
          id="robot"
          className="flex flex-row flex-nowrap items-start justify-start w-[70%] gap-[10px]"
        >
          {chatMessageRobot}
          {message}
          {chatMessageUser}
        </div>
      )}

      {sender === "user" && (
        <div
          id="user"
          className="flex flex-row flex-nowrap items-start justify-end w-[70%] gap-[10px]"
        >
          {chatMessageRobot}
          {message}
          {chatMessageUser}
        </div>
      )}
    </>
  );
};
