import { Message, User } from "../../../models";

interface Props {
  filteredMessages: Message[];
  user: User;
}

const MessageListComponents = ({ filteredMessages, user }: Props) => {
  return (
    <div className="message-list">
      {filteredMessages &&
        filteredMessages.map((messageToRender) => {
          return (
            <div className="message-item" key={Math.random()}>
              <div className="message-content">{messageToRender.content}</div>
              <img className="message-avatar" src={user.img} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default MessageListComponents;
