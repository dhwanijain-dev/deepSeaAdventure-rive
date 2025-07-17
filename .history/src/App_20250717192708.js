import Rive from '@rive-app/react-canvas';
const App = () => {
  return (
    <div>
      <Rive
        src="untitled.riv"
        stateMachines="bumpy"
        style={{ width: '100vw', height: '100vh' }}
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  )
}

export default App
