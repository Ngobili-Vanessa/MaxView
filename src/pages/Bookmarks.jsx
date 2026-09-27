// import "./Bookmarks.css";

// function Bookmarks() {
//   const bookmarks = [];

//   return (
//     <section className="bookmarks-page">
//       <div className="bookmarks-header">
//         <h1>My Bookmarks</h1>
//         <p>
//           Save articles, characters, media and merchandise you want
//           to come back to.
//         </p>
//       </div>

//       {bookmarks.length > 0 ? (
//         <div className="bookmarks-grid">
//           {bookmarks.map((item) => (
//             <article className="bookmark-card" key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.type}</p>
//             </article>
//           ))}
//         </div>
//       ) : (
//         <div className="bookmarks-empty">
//           <h2>No bookmarks yet</h2>
//           <p>
//             When you bookmark something, it will appear here.
//           </p>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Bookmarks;


// import "./Bookmarks.css";

// function Bookmarks() {
//   // read from storage, if no storage, show empty []
//   const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")

//   function removeBookmark(id) {
//     const newList = bookmarks.filter(b => b.id !== id)
//     localStorage.setItem("bookmarks", JSON.stringify(newList))
//     window.location.reload()
//   }

//   return (
//     <section className="bookmarks-page">
//       <div className="bookmarks-header">
//         <h1>My Bookmarks</h1>
//         <p>Save articles, characters, media and merchandise you want to come back to.</p>
//       </div>

//       {bookmarks.length > 0 ? (
//         <div className="bookmarks-grid">
//           {bookmarks.map((item) => (
//             <article className="bookmark-card" key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.type}</p>
//               <button onClick={() => removeBookmark(item.id)}>Remove</button>
//             </article>
//           ))}
//         </div>
//       ) : (
//         <div className="bookmarks-empty">
//           <h2>No bookmarks yet</h2>
//           <p>Start saving to see them here</p>
//         </div>
//       )}
//     </section>
//   )
// }

// export default Bookmarks


// import "./Bookmarks.css";

// function Bookmarks() {
//   // This one has something inside already, so you will not see empty again
//   const bookmarks = [
//     { id: 1, title: "Naruto Character Guide", type: "Character" },
//     { id: 2, title: "One Piece New Episode", type: "Media" },
//     { id: 3, title: "Anime Expo Lagos", type: "Event" },
//     { id: 4, title: "How to Draw Anime", type: "Article" },
//     { id: 5, title: "Naruto Headband", type: "Merchandise" }
//   ];

//   return (
//     <section className="bookmarks-page">
//       <h1>My Bookmarks</h1>
//       <p>Save articles, characters, media and merchandise you want to come back to.</p>

//       <div className="bookmarks-grid">
//         {bookmarks.map((item) => (
//           <article className="bookmark-card" key={item.id}>
//             <h2>{item.title}</h2>
//             <p>{item.type}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Bookmarks;

import { useState, useEffect } from "react";
import "./Bookmarks.css";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [notes, setNotes] = useState({});

  useEffect(()=>{
    setBookmarks(JSON.parse(localStorage.getItem("bookmarks") || "[]"));
    setNotes(JSON.parse(localStorage.getItem("bookmarkNotes") || "{}"));
  },[]);

  function remove(id){
    const updated = bookmarks.filter(b => String(b.id)!== String(id));
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    setBookmarks(updated);
  }
  function saveNote(id, text){
    const n = {...notes, [id]: text};
    setNotes(n);
    localStorage.setItem("bookmarkNotes", JSON.stringify(n));
  }
  function share(title){
    navigator.clipboard.writeText(title + " - " + window.location.href);
    alert("Link copied: " + title);
  }

  return (
    <section className="bookmarks-page">
      <h1>My Bookmarks</h1>
      <p>Saved articles, Saved characters, Saved media, Saved merchandise, Saved events</p>

      {bookmarks.length === 0? (
        <div className="bookmarks-empty"><h2>No bookmarks yet</h2></div>
      ) : (
        <div className="bookmarks-grid">
          {bookmarks.map(item => (
            <article className="bookmark-card" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.type}</p>
              <p>Notes & Sharing:</p>
              <input placeholder="Add notes to saved content" defaultValue={notes[item.id] || ""} onBlur={(e)=>saveNote(item.id, e.target.value)} />
              <br/>
              <button onClick={()=>share(item.title)}>Share links</button>
              <button onClick={()=>share(item.title)}>Share content</button>
              <button onClick={()=>remove(item.id)}>Remove</button>
            </article>
          ))}
        </div>
      )}
      <div style={{marginTop:"20px"}}>
        <p>Saved Articles: {bookmarks.filter(b=>b.type==="Article").length}</p>
        <p>Saved Characters: {bookmarks.filter(b=>b.type==="Character").length}</p>
        <p>Saved Media: {bookmarks.filter(b=>b.type==="Media").length}</p>
        <p>Saved Merchandise: {bookmarks.filter(b=>b.type==="Merchandise").length}</p>
        <p>Saved Events: {bookmarks.filter(b=>b.type==="Event").length}</p>
      </div>
    </section>
  );
}
export default Bookmarks;