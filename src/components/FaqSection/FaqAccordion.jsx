import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
export default function FaqAccordion({ques,ans}){
  const [show,setShow]=useState(false)
  return (
    <div className="ques-sec">
      <div className="ques">
        <h4 onClick={() => setShow(!show)}>{ques} <KeyboardArrowDownIcon onClick={() => setShow(!show)} /> </h4>
      </div>
      {show &&
        <p>{ans}</p>
      }
    </div>
  
  )
}