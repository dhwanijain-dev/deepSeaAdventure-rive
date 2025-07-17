import Rive from '@rive-app/react-canvas';
const App = () => {
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
