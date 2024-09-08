import React, { useState, useEffect } from "react";
import { auth } from "../services/ninjaAuth";
import { sendMessage, listenForMessages } from "../services/shadowDatabase";
import {
  generateKeyPair,
  encryptMessage,
  decryptMessage,
} from "../services/cloakAndDagger";
import SecretMessageList from "./SecretMessageList";
import StealthyInput from "./StealthyInput";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DontWatchMeChat = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [keyPair, setKeyPair] = useState(null);

  useEffect(() => {
    const setupChat = async () => {
      // Sign in anonymously
      const user = await auth.signInAnonymously();
      setUser(user);

      // Generate key pair
      const newKeyPair = await generateKeyPair();
      setKeyPair(newKeyPair);

      // Store public key
      await sendMessage("publicKeys", {
        uid: user.uid,
        key: await window.crypto.subtle.exportKey("jwk", newKeyPair.publicKey),
      });

      // Listen for new messages
      listenForMessages("messages", async (data) => {
        if (data.recipient === user.uid) {
          const decryptedContent = await decryptMessage(
            newKeyPair.privateKey,
            data.content,
          );
          setMessages((prev) => [
            ...prev,
            { sender: data.sender, content: decryptedContent },
          ]);
        }
      });
    };

    setupChat();
  }, []);

  const handleSendMessage = async (content) => {
    if (content.trim() && user) {
      // In a real app, you'd select a specific recipient
      const recipientKey = await sendMessage("publicKeys", {
        uid: "someRecipientId",
      });
      const encryptedContent = await encryptMessage(recipientKey, content);

      await sendMessage("messages", {
        sender: user.uid,
        recipient: "someRecipientId",
        content: encryptedContent,
      });
    }
  };

  if (!user || !keyPair) {
    return (
      <Alert>
        <AlertDescription>Establishing secure connection...</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">dontWatchMe Chat</h1>
      <SecretMessageList messages={messages} currentUser={user} />
      <StealthyInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default DontWatchMeChat;
