import Rive, { useRive } from '@rive-app/react-canvas';
const App = () => {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: "bumpy",
    autoplay: false,
    
  });
  return (
    <div>
      <RiveComponent
        style={{ width: '100%', height: '100%' }}
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  )
}

export default App
