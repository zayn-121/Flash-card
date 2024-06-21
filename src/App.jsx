import { useState } from "react"
import { staticData } from "./Config/staticData"
function App() {
  const [selectedId, setSelectedId] = useState(null)

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null)
  }

  return (
    <>
      <div className="App">
        {staticData.map((data) => {
          return (
            <div key={data.id} className={selectedId === data.id ? " active" : "card"} onClick={() => handleClick(data.id)}>
              <p>{selectedId === data.id ? data.answer : data.question}</p>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default App
