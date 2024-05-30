import { Wheel } from 'react-custom-roulette'

function Ruleta({state, changeState=()=>{} , data, win, callback=()=>{}}){

  return (
    <>
      <Wheel
        mustStartSpinning={state}
        prizeNumber={win}
        data={data}
        backgroundColors={[
    '#FF4500', // Orange Red
    '#32CD32', // Lime Green
    '#1E90FF', // Dodger Blue
    '#FFD700', // Gold
    '#FF69B4', // Hot Pink
    '#00CED1', // Dark Turquoise
    '#ADFF2F', // Green Yellow
    '#FFA07A', // Light Salmon
    '#9370DB', // Medium Purple
    '#40E0D0'  // Turquoise
]}
        fontSize={9}
        onStopSpinning={() => {
          changeState(false);
        }}
      />
      
    </>
  )
}

export default Ruleta;