import Rive from '@rive-app/react-canvas';
const App = () => {
  return (
    <div>
      <Rive
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        style={{ width: '1--', height: '1--' }}
      />
    </div>
  )
}

export default App
