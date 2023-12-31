import React,{useState,useEffect} from 'react'
import ListItem from '../components/listitem'
import AddButton from '../components/AddButton'
const Noteslistpage = () => {

    let[notes,setNotes] = useState([])
  
  useEffect(()=>{
    getNotes()
  },[]
  )

  let getNotes = async() =>{
    let response = await fetch('/api/notes')
    let data= await response.json();
    console.log('notes data', data)
    setNotes(data)
  }

    return (
        <div className='notes'>
          <div className='notes-header'>
            <h2 className='notes-title'> &#9782; Notes</h2>
            <p className='notes-count'>{notes.length}</p>
          </div>
            <div className='notes-list'>
                { notes.map((note,index)=>(
                    <ListItem key={index} note={note}/>
                ))}
            </div>
            <div>
              <AddButton></AddButton>
            </div>
        </div>
    )
}

export default Noteslistpage