// src/MessagesList.jsx
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "./firebase";
import { collection } from "firebase/firestore";

function MessagesList() {
  const [value, loading, error] = useCollection(collection(db, "messages"));

  if (loading) return <p>Загрузка сообщений...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <h2>📩 Сообщения из Firestore:</h2>
      <ul>
        {value.docs.map((doc) => (
          <li key={doc.id}>
            <strong>ID:</strong> {doc.id} <br />
            <strong>Text:</strong> {doc.data().text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessagesList;
