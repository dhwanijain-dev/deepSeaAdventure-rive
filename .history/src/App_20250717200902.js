import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const STATE_MACHINE_NAME = "State Machine 1"; 
const INPUT_NAME = "hover"; 

const App = () => {
  const { rive, RiveComponent } = useRive({
    src: 'untitled.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });


  const hoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  return (
    <div
      onMouseEnter={() => {
        if (hoverInput) hoverInput.value = true;
      }}
      onMouseLeave={() => {
        if (hoverInput) hoverInput.value = false;
      }}
    >
      <RiveComponent
        style={{ width: '100vw', height: '100vh' }}
      />
    </div>
  );
};

export default App;
