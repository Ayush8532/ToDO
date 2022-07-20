import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Listcom from './Listcom.jsx'
import AddIcon from '@mui/icons-material/Add';
import './css/todo.css';

function  Todo() {
    const[item,setItem]=useState(" ");
    const[newitem,setNewitem]=useState([]);
    const itemEvent=(event)=>{
        setItem(event.target.value);
    }
    const handleItem=()=>{
        setNewitem((prev)=>{
            return [...prev,item];
        })
        setItem(' ');
        if(newitem.length===5)
        {
            alert("Remove Items by Double Click");
        }
    }
       const deleteval=(id)=>{
        setNewitem((prev)=>{
            return prev.filter((arrEle,index)=>{
                return index!==id;
            })
        })
    }
  return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>  
            <br />
            <input type="text" placeholder="Add a item" value={item} onChange={itemEvent} />
            <Button variant="contained" className='newBtn' onClick={handleItem}>
            <AddIcon/>
            </Button>
            <ol size='4'>
                {newitem.map((val,index)=>{
                    return <Listcom  key={index} id={index} text={val} onSelect={deleteval}/>
                })}
            </ol>
        </div>
    </div>
    </>
  )
}
export default Todo;
