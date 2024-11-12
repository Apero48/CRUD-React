import React, { useState } from 'react';
import App from '../App';
export default function Post({ data, liker, supression, mettreAJour }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(data.titre);
  const [newDescription, setNewDescription] = useState(data.description);

  const handleUpdate = () => {
    mettreAJour(data.id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <div className={data.liker ? "post active" : "post"}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Mettre à jour</button>
        </div>
      ) : (
        <div>
          <h2>{data.titre}</h2>
          <p>{data.description}</p>
        </div>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Annuler" : "Modifier"}
      </button>
      <button onClick={() => supression(data.id)}>Effacer</button>
      <button onClick={() => liker(data)}>
        {data.liker ? "Déjà liké" : "Liker"}
      </button>
    </div>
  );
}
