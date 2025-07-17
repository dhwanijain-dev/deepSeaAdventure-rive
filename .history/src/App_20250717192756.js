import Rive, { useRive } from '@rive-app/react-canvas';
const App = () => {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: "bumpy",
    autoplay: false,
    sty
  });
  return (
    <div>
      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  )
}

export default App
