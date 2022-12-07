import MessengerCustomerChat from "react-messenger-customer-chat";

const Chat = () => (
  <div>
    {/* {typeof window !== "undefined" && ( */}
      <MessengerCustomerChat
        pageId="239506916203358"
        appId="678716835880707"
        shouldShowDialog={true}
      />
    {/* )} */}
  </div>
);

export default Chat;
