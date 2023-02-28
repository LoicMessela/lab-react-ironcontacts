import './App.css';
import contactsDB from './contacts.json'
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsDB.slice(0, 5))

  const handleAddContact = () => {
    const randomContact = contactsDB[Math.floor(Math.random()* contactsDB.length)]
    const copyContact = [...contacts, randomContact]

    setContacts(copyContact)
  }

  const handleSortPopularity = () => {
    const copyPop = [...contacts]
    copyPop.sort((a,b)=>
      b.popularity - a.popularity)
      setContacts(copyPop)

  };

  const handleSortName = () => {
    const copyName = [...contacts]
    copyName.sort((a,b)=>a.name.localeCompare(b.name)    
    )
    setContacts(copyName)
  };

  const handleDelete = (id) => {
    const RemainingActor = contacts.filter((contact)=> contact.id !== id )
    setContacts(RemainingActor)
  }
  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button className='topBtn' onClick={handleAddContact}>Add Random Contact button</button>
    <button className='topBtn' onClick={handleSortPopularity}>Sort by popularity</button>
    <button className='topBtn' onClick={handleSortName}>Sort by name</button>
      <table>
      <thead className= "tableHead">
           <td>Picture</td>
           <td>Name</td>
           <td>Popularity</td>
           <td>Won Oscar</td>
           <td>Won Emmy</td>
           <td>Actions</td>
         </thead>
      {contacts.map((contact)=> {
       return( 
        <>
             <tr><td>
               <img src={contact.pictureUrl} alt="" height="150" width="100" />
             </td>
             <td>
               {contact.name}
             </td>
             <td>
               {contact.popularity}
             </td>
             <td>{contact.wonOscar ? '🏆': '' }</td>
             <td>{contact.wonEmmy? '🥇': ''}</td>
             <td><button className="delete" onClick={()=>handleDelete(contact.id)}>Delete</button></td>
           </tr>
           </>)
      })}</table>
    </div>
  );
}

export default App;
