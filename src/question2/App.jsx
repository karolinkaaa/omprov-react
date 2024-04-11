// 2. Visa lista med Posts (Inlägg) via API-Anrop (3p)
// Hämta post-data från https://jsonplaceholder.typicode.com/posts.
// Komponenten ska visa titlarna på de första 10 posts.
// Varje titel ska ha en knapp märkt "Visa detaljer".
// När denna knapp klickas på, ska inläggets body visas under sin titel.
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5)));
  }, []);

  const handlePostClick = (body) => {
    console.log("Visa detaljer:", body);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <button onClick={() => handlePostClick(post.id)}>{post.title}</button>
        </div>
      ))}
    </div>
  );
}

export default App;
