import './App.css';
import EventCard from './component/event-card/EventCard';
// import { useEffect,useState } from 'react';
import {data} from './data/certificate-data'

function App() {
  // const category = [...new Set(data.map((item) => item.category))]
  // console.log(category)
  // let fast = data.filter((item)=>{
  //   return item.category !== "Training"
  // })
  function categoryFilter(data){

    let tuple = [
      {
        category:"Training",
        event:new Set()
      },
      {
        category:"Workshop",
        event:new Set()
      },
      {
        category:"Lecture",
        event:new Set()
      },
    ]
    data.forEach((item)=>{
      tuple.forEach((tupleItem)=>{
        if (tupleItem.category===item.category)
        {
          tupleItem.event.add(item.event)
        }
      })


        // if("Workshop" === item.category){
        //   tuple.Workshop.add(item.event)
        // }else if ("Lecture" === item.category){
        //   tuple.Lecture.add(item.event)
        // }else{
        //   tuple.Training.add(item.event)
        // }
    })
    // console.log(tuple)
    return tuple
  }
  let FilterData = categoryFilter(data)
  return (
    <div className="App"> 
     <div className="event-container">
      {
        // console.log(FilterData)
        FilterData.map((item) =>(
          [...item.event].map((eventItem)=>(
              <EventCard category={item.category} event={eventItem}/>
            ))
        ))
      }
     </div>
    </div>
  );
}

export default App;
