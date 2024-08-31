import { useState } from 'react'
import './App.css'
import './outerbox.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import{data,data2,data3} from './data';



const element = <FontAwesomeIcon icon={faCheck}/>
const element1=<FontAwesomeIcon icon={faXmark} />



function Headercontent(props)
{
  return(
    <div className="titleclass">
      <p className="titlestatus">{props.status}</p>
      <h2>{props.title}</h2>
      <div className="underline"></div>
    </div>
  )
}

function Footercontent()
{
  return(
    <div className="footerclass">
      <button className="btn btn-primary rounded-pill px-3"><p className="buttonfont">BUTTON</p></button>
    </div>
  )
}

function Bodycontent(props)
{
  const listItems = props.curdata1.map(person =>
    <li key={person.c}>
      <div className="bodyclass"> 
       <div className="bodycontent">
         <div className={person.ic}>
          {person.ie==="element"?element:element1}
         </div>
          <p className={person.fc}>{person.c}</p>
        </div>
      </div>

    </li>
  );
  return <ul>{listItems}</ul>;
}

function Singlecard(props)
{
  return (
    <div className="card">
      <Headercontent  status={props.status} title={props.amount}/>
      <Bodycontent curdata1={props.curdata}/>
      <Footercontent/>
    </div>
  )

}


function Cardset()
{
    return (<>
    <div className="outerbox">
      <Singlecard status="FREE" amount="$0/month" curdata={data}/>
      <Singlecard status="PLUS" amount="$9/month" curdata={data2}/>
      <Singlecard status="PRO" amount="$49/month" curdata={data3}/>
    </div>
      
    </>)
}


function App() {
  return (
  <div> 
    <Cardset/>
  </div>
  )

}

export default App
