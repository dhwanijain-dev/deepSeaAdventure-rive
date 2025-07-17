import Rive from '@rive-app/react-canvas';
const App = () => {
  return (
    <div>
      <Rive
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        style={{ width: '9', height: '9' }}
      />
    </div>
  )
}

export default App
