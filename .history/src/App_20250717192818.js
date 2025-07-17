import Rive, { useRive } from '@rive-app/react-canvas';
const App = () => {
  const { rive, RiveComponent } = useRive({
    src: 'untitle.riv',
    stateMachines: "bumpy",
    autoplay: false,
    
  });
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
