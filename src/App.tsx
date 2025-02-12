import { Routes, Route } from "react-router-dom";


function App() {


  return (
      <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/configuration" element={<p>configuration</p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="*" element={<p>404</p>} />
      </Routes>
  )


}

export default App
