import React, { useState } from 'react'
import Compteur from './composants/Compteur'; 
import Navbar from './composants/Navbar';
import Post from './composants/Post';

export default function App() {
  const[posts,setPosts] = useState([
    {
      id: 1,
      titre: "Assani Raouf",
      description: "Voici un exemple de texte qui vient juste remplacer ce texte ici ",
      liker: false,
    },
    {
      id: 2,
      titre: "Rokibath",
      description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
  {
    id: 3,
      titre: "Junior santos",
      description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
  },
  {
    id: 4,
      titre: "Germin  dantos",
      description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
  },
  {
    id: 5,
      titre: "JEAN  Bantos",
      description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
  },
  {
    id: 6,
      titre: "Ali Dosos",
      description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
  },
  {
    id: 7,
      titre: "Faride ALos",
      description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
  },
   
  ]);

  const liker = (data)=> {
    const donneeCopier = [...posts];
    const index = posts.indexOf(data)
    donneeCopier[index] = {...posts[index],liker:!posts[index].liker };
    setPosts(donneeCopier);
    console.log(donneeCopier);

  };
  const effacerPost = (id) =>{
    const nouvelledonnee = posts.filter((p) =>p.id != id)
    setPosts(nouvelledonnee)
  }
   const nombreliker = posts.filter(p=>p.liker)
   
   const mettreAJour = (id, newTitle, newDescription) => {
    const c = posts.map((post) =>
      post.id === id ? { ...post, titre: newTitle, description: newDescription } : post
    );
    setPosts(c);
  };

  return (
    <div style={{
      backgroundColor: "#334",
      width: "100%",
      height: "100vh",
      display: "flex",            
      flexDirection: "column",      
      justifyContent: "center",     
      alignItems: "center" ,

    }}>
      <div className="App">
   <Navbar nombreliker ={nombreliker.length} /> 

   {posts.map((p) => (<Post data={p} key={p.id} liker={liker} 
   supression={effacerPost} mettreAJour={mettreAJour}/>))
   }
    
    </div>
    </div> 
 

  )
}


