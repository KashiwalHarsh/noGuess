import Versions from './components/Versions'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h1>Steganography Data Hiding</h1>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Upload Image to Encrypt
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Decrypt
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
