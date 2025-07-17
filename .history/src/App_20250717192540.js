import Rive from '@rive-app/react-canvas';
const App = () => {
  return (
    <div>
      <Rive
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        style={{ width: '100vw', height: '100vh' }}
      />
    </div>
  )
}

export default App
