import Rive from '@rive-app/react-canvas';
const App = () => {
  return (
    <div>
      <Rive
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        style={}
      />
    </div>
  )
}

export default App
