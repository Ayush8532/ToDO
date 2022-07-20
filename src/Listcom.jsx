import React ,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './css/todo.css';

export default function Listcom(props) {
    const [line,setLine]=useState(false);
    const cutit=()=>{
        setLine(true);
        if(line===true)
        {
            setLine(false);
        }
        else{
            setLine(true);
        }
    }
  return (
    <>
    <div className='todo_style'>
        <span onClick={cutit}>
            <DeleteIcon className="deleteIcon" onDoubleClick={()=>{
                props.onSelect(props.id);
            }} />
    </span>
      <li style={{textDecoration:line? "line-through":"none" }}> {props.text}</li>
    </div>
    </>
  )
}
