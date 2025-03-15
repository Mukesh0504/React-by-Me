import Card from "./component/Card"


function App() {

  return (
    <>
      <div className="w-full bg-gray-600 h-dvh">
        <Card boxId={1} />
        <Card boxId={2} />
        <Card boxId={3} />
      </div>
    </>
  )
}

export default App
