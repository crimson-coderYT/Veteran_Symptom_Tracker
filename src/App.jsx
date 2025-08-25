import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState([])

  useEffect (() => {
    const storedLogs = JSON.parse(localStorage.getItem("symptoms") || "[]");
    setLogs(storedLogs);
  }, [])

  return (
    <>
    <Outlet />
      <div>
        <div>
          <img src='./resources/vetlogo.png' className="logo react" id='vetlogo'/>
          <h1>SYMPTOM TRACKER</h1>
        </div>
        <div id='title'>
          <h3>LOGS</h3>
          <Link to="/createLog">
          <button>+</button>
          </Link>
        </div>
      </div>
      <div id='logList'>
        <ul>
          {logs.map((log) => (
            <li key={log.id}>
              {log.name} - {log.recordedAt} 
              <p>{log.notes}</p>
            </li>
          ))}
        </ul>
      </div>
      <button id='logs'>Logs</button>
     <Link to="/pdfcreation"><button id='pdf'>PDFs</button></Link>
      <button id="settings">Settings</button>
    </>
  )
}

export default App
