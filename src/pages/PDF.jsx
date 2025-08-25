import { useState, useEffect } from 'react'
import { jsPDF } from "jspdf"
import { useNavigate } from 'react-router-dom'

function PDF() {
  const [logs,setLogs] = useState([])
  const [name, setName] =useState("")
  const [ssnLast4, setssnLast4] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState("")
  const [dob, setDOB] = useState("")
  const navigate = useNavigate();

  useEffect (() => {
    const storedLogs = JSON.parse(localStorage.getItem("symptoms") || "[]");
    setLogs(storedLogs);
  }, [])

  const handleCreate = (e) => {
    e.preventDefault();

    const doc =new jsPDF();
    doc.setFontSize(14);
    doc.text("Symptom Log", 10, 10)
    doc.setFontSize(12)
    doc.text(`Name: ${name}`, 10, 20)
    doc.text(`Date of Birth: ${dob}`, 10, 28)
    doc.text(`Last 4 of SSN: ${ssnLast4}`, 10, 36)
    doc.text(`Address: ${address}`, 10, 44)
    doc.text(`Phone: ${phone}`, 10, 52)
     doc.setFontSize(20);
    doc.text('Logs', 100, 60)
     doc.setFontSize(12);
    let y = 72
    logs.forEach((log, index) => {
        doc.text(`${log.recordedAt} - ${log.name}(Soverity: ${log.soverity})`,
            10, y
        )
        let notes = doc.splitTextToSize(`Notes: ${log.notes}`,180 )
        doc.text(notes, 10, y + 7)
        y += 7  + notes.length * 7;
    })
    doc.save(`${name}-SyptomTracker.pdf`)
    navigate("/");

}
  return (
    <>
    <form onSubmit={handleCreate}>
        <h2>Please enter personal infomration Before PDF</h2>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Last 4 of SSN" value={ssnLast4} onChange={e => setssnLast4(e.target.value)} />
                <input placeholder="Date of Birth" value={dob} onChange={e => setDOB(e.target.value)} />
                <input placeholder="Address" value={address} onChange={e => setaddress(e.target.value)}  />
                <input placeholder="Phone" value={phone} onChange={e => setphone(e.target.value)} />
                <button type="submit">Create PDF</button>
        
    </form>
    <p>Disclaimer: Provide your Personal info at your own discretion. This information is only used to generate your PDf and not stored in any way, you 
        do not have to enter any information you do not want to as well as we do not store any information or are responsible for any information on this page.
        Once you refresh the page this information is PERMANETLY cleared and never saved locally to your machine. </p>
    </>
  )
}

export default PDF
 