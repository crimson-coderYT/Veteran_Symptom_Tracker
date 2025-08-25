import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateLog() {
  const [name, setName] =useState("")
    //you can give each symptom a name, usually what is the symptom experienced?
  const [soverity,setSoverity] =useState(10)
  //soverity will tell how bad on a scal 1-10
  const [notes, setNotes] = useState("")
  const navigate = useNavigate(); //for easier navigation to other pages

  const handleCreate = (e) => {
    e.preventDefault();
    //yes I used ai for alot of this this is my first time coming back in and need to start somewhere, some of this is my own code though

    //now time to turn this into usable JSON that stays in local storage

    const logs = JSON.parse(localStorage.getItem("symptoms") || "[]")
    logs.push({
        id: Date.now(),
        name,
        soverity,
        notes,
        recordedAt: new Date(Date.now()).toLocaleString(),
    })
    localStorage.setItem("symptoms", JSON.stringify(logs))
    navigate("/");
}
  return (
    <>
        <div id='header'>
            <h3>Create Log</h3>
        </div>
        <form onSubmit={handleCreate}>
            <div>
                <label>Symptoms: </label>
                <input
                type='text'
                value={name}
                onChange={(e) =>setName(e.target.value)}
                placeholder="What are the symptoms you are experiencing?" />
            </div>
            <div>
                <label>Soverity: </label>
                <input
                type='number'
                min='1'
                max="10"
                value={soverity}
                onChange={(e) =>setSoverity(e.target.value)}/>
                <p>Scale from 1-10</p>
            </div>
            <div>
                <label>Notes: </label>
                <textarea
                value={notes}
                onChange={(e) =>setNotes(e.target.value)}
                placeholder="Details of the symptoms" />
            </div>
        <button type="submit">Create Log</button>
        </form>
    </>
  )
}

export default CreateLog
