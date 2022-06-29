import MessageForm from "./MessageForm";
import MyMessages from "./MyMessages";
import TheirMessages from "./ThierMessages";

const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages} = props;
	
	const chat = chats && chats[activeChat];

	const renderReaderReciepts = (message, isMyMessage) => 
		chat.people.map((person, index) => person.last_read === messages.id && (
			<div
				key={`read_${index}`}
				className="read-receipt"
				style={{
					float: isMyMessage ? 'right' : 'left',
					backgroundImage: `url(${person?.person?.avatar})`,
				}}
			/>
		));
	

	const renderMessages = () => {
		const keys = Object.keys(messages);

		return keys.map((key, index) => {
			const message = messages[key];
			const lastMessageKey = key === 0 ? null : keys[index - 1];
			const isMyMessage = userName === message.sender.username;
			return (
				<div key={`msg_${index}`} style={{ width: "100%"}}>
					<div className="message-block">
						{
							isMyMessage
							? <MyMessages message={message}/>
							: <TheirMessages message={message} lastMessage={messages[lastMessageKey]}/>
						}
					</div>
					<div className="read-receipts" style={{ marginRight : isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
						{renderReaderReciepts(message, isMyMessage)}
					</div>
				</div>
			)	
		})
	}

	renderMessages()
		if(!chat) return "Loading...!";
	return(
			<div className="chat-feed">
				<div className="chat-title-container">
					<div className="chat-title">{chat?.title}</div>
					<div className="chat-subtitle">
						{chat.people.map((person) => `${person.person.username}`)}
					</div>
				</div>
				{renderMessages()}
				<div style={{ height: "100px"}}/>
				<div className="message-form-container">
					<MessageForm {...props} chatId={activeChat} />
				</div>
			</div>
	)
}

export default ChatFeed;