import Tabla from './Tabla'


function Tablero({state,cont, handleSpinClick, data, prizeNumber,handleWinners, winners, exportToExcel}) {
    return ( <div className='w-1/2 h-full flex flex-col justify-evenly items-center'>
    <h3 className=' w-4/5 flex h-16 
        text-center justify-center items-center 
        rounded bg-gradient-to-r from-cyan-300 to-blue-300
        text-xl font-bold text-gray-700'>
        {
            (cont !== 0)?(
                state?'Esperando...':`El ganador es ${data[prizeNumber].name}`
            ):'Inicia la ruleta'
        }
    </h3>
    <div className='w-4/5 flex h-12 justify-evenly items-center'>
        <button 
            className=' w-1/4 h-full rounded text-gray-700 font-bold
                        bg-gradient-to-r from-cyan-300 to-blue-300 '
            onClick={handleSpinClick}>
                SPIN
        </button>
        <button 
            className=' w-1/4 h-full rounded text-gray-700 font-bold
                        bg-gradient-to-r from-lime-500 to-green-500'
            onClick={handleWinners}>
                Guardar
            </button>
    </div>
    <div className='w-4/5 h-1/2 overflow-y-auto'>
    <Tabla winners={winners}/>
    </div>
    <div className='w-4/5 flex h-12 justify-evenly items-center'>
        <button 
            className=' w-1/4 h-full rounded text-gray-700 font-bold
            bg-gradient-to-r from-lime-500 to-green-500'
            onClick={exportToExcel}>
                Descargar lista
        </button>
    </div>
    
</div> );
}

export default Tablero;