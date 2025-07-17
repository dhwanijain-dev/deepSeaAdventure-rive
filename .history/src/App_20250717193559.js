import Rive, { useRive } from '@rive-app/react-canvas';
const App = () => {
  const { rive, RiveComponent } = useRive({
    src: 'untitled.riv',
    stateMachines: "idle",
    autoplay: true,
    
  });
  console.log(rive.sta);
  return (
    <div>
      <RiveComponent
        style={{ width: '100vw', height: '100vh' }}
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  )
}

export default App
