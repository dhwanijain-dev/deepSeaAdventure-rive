import Rive from '@rive-app/react-canvas';
const App = () => {
  return (
    <div>
      <Rive
        src="unti"
        stateMachines="bumpy"
        style={{ width: '100vw', height: '100vh' }}
      />
    </div>
  )
}

export default App
