// import events from "../data/events.json"

// function Calendar() {
//   return (
//     <div>
//       <h1>Event Calendar</h1>
//       <p>Upcoming events</p>
//       {events.map((e) => (
//         <div key={e.id}>
//           <p><b>{e.date}</b> - {e.title} ({e.city})</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Calendar;

import { useState } from "react";

const eventsData = [
  { id:1, title:"Lagos Comic Con 2026", date:"2026-09-12", location:"Landmark, VI, Lagos", color:"#6c5ce7" },
  { id:2, title:"AniWeCon: Beyond Fury", date:"2026-08-15", location:"Paradise Arena, Yaba", color:"#e84393" },
  { id:3, title:"Lagos Games Week", date:"2026-06-18", location:"National Theatre, Lagos", color:"#00b894" },
  { id:4, title:"AnimeCon Africa 2027", date:"2027-07-16", location:"Landmark Centre, Lagos", color:"#fdcb6e" },
  { id:5, title:"Africa Tech Festival", date:"2026-11-17", location:"CTICC, Cape Town", color:"#0984e3" },
  { id:6, title:"AOT Lagos 8.0", date:"2026-12-03", location:"Landmark, VI", color:"#6c5ce7" },
  { id:7, title:"AfroFutureTech iFest", date:"2026-12-03", location:"Elegushi Beach, Lagos", color:"#e17055" },
  { id:8, title:"NTAI Night Anime", date:"2026-10-31", location:"POP Landmark, Oniru", color:"#e84393" },
  { id:9, title:"AnimeCon Launch Mixer", date:"2026-10-31", location:"Lagos", color:"#fdcb6e" },
  { id:10, title:"Africa Tech Expo", date:"2026-06-26", location:"Wole Soyinka Centre", color:"#0984e3" },
];

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState("2026-09-12");
  
  const eventsOnSelected = eventsData.filter(e => e.date === selectedDate);

  return (
    <div style={{padding:"20px", background:"#0f0f13", minHeight:"100vh", color:"white", display:"flex", gap:"20px", flexWrap:"wrap"}}>
      
      {/* LEFT - CALENDAR GRID */}
      <div style={{flex:"1.5", minWidth:"320px", background:"#1c1c22", borderRadius:"14px", padding:"16px"}}>
        <h2>📅 Calendar - Sept 2026</h2>
        <p style={{opacity:0.6, fontSize:"13px"}}>Click a date to see event</p>
        
        <div style={{display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:"8px", marginTop:"20px", textAlign:"center"}}>
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=>(
            <div key={d} style={{fontSize:"11px", opacity:0.5}}>{d}</div>
          ))}
          {/* Empty spaces for Sept 2026 starts Tuesday */}
          <div></div><div></div>
          {Array.from({length:30}, (_,i)=> {
            const day = i+1;
            const dateStr = `2026-09-${String(day).padStart(2,'0')}`;
            const hasEvent = eventsData.some(e=>e.date===dateStr);
            const isSelected = selectedDate===dateStr;
            return (
              <div 
                key={day}
                onClick={()=>setSelectedDate(dateStr)}
                style={{
                  padding:"10px 0", 
                  borderRadius:"8px", 
                  cursor:"pointer",
                  background: isSelected ? "#6c5ce7" : hasEvent ? "#2d2d4a" : "#25252d",
                  border: hasEvent ? "1px solid #6c5ce7" : "none",
                  fontSize:"14px"
                }}
              >
                {day}
                {hasEvent && <div style={{width:"4px", height:"4px", background:"#6c5ce7", borderRadius:"50%", margin:"2px auto 0"}}></div>}
              </div>
            )
          })}
        </div>

        <div style={{marginTop:"20px"}}>
          <h4>All Events:</h4>
          {eventsData.slice(0,6).map(ev=>(
            <div key={ev.id} onClick={()=>setSelectedDate(ev.date)} style={{padding:"8px", margin:"6px 0", background:"#25252d", borderRadius:"8px", cursor:"pointer", borderLeft:`4px solid ${ev.color}`, fontSize:"13px"}}>
              {ev.date} - {ev.title}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT - DETAILS */}
      <div style={{flex:"1", minWidth:"280px", background:"#1c1c22", borderRadius:"14px", padding:"16px", height:"fit-content"}}>
        <h3>Details for {selectedDate}</h3>
        {eventsOnSelected.length > 0 ? (
          eventsOnSelected.map(ev=>(
            <div key={ev.id} style={{marginTop:"15px", background:"#25252d", padding:"14px", borderRadius:"10px"}}>
              <h4 style={{margin:"0 0 5px"}}>{ev.title}</h4>
              <p style={{fontSize:"12px", opacity:0.6}}>{ev.location}</p>
              <p style={{fontSize:"13px", marginTop:"8px"}}>This is a verified fandom event. Click below to get tickets.</p>
              <button style={{marginTop:"10px", background:"#6c5ce7", border:"none", color:"white", padding:"8px 14px", borderRadius:"8px", cursor:"pointer"}}>Add to My List</button>
            </div>
          ))
        ) : (
          <p style={{opacity:0.5, marginTop:"15px"}}>No event on this date. Select a date with blue dot.</p>
        )}
      </div>
    </div>
  );
}