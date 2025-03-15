import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      {/* <h1 className='bg-green-500 p-4 rounded-md text-black'>Hii, I am Mukesh</h1> */}

      <div className="w-full h-screen duration-2000" style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold cursor-pointer" style={{ backgroundColor: "red" }}
              onClick={() => setColor("Red")}
            >Red</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "green" }}
              onClick={() => setColor("Green")}
            >Green</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "Blue" }}
              onClick={() => setColor("Blue")}
            >Blue</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "Olive" }}
              onClick={() => setColor("Olive")}
            >Olive</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "Gray" }}
              onClick={() => setColor("Gray")}
            >Gray</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "Yellow" }}
              onClick={() => setColor("Yellow")}
            >Yellow</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "Pink" }}
              onClick={() => setColor("Pink")}
            >Pink</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "Purple" }}
              onClick={() => setColor("Purple")}
            >Purple</button>

            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-semibold" style={{ backgroundColor: "Lavender" }}
              onClick={() => setColor("Lavender")}
            >Lavender</button>

            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-semibold" style={{ backgroundColor: "White" }}
              onClick={() => setColor("White")}
            >White</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold" style={{ backgroundColor: "Black" }}
              onClick={() => setColor("Black")}
            >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
