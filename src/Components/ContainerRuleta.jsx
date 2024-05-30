'use client'
import { useState } from 'react';

import Ruleta from './Ruleta'
import Tablero from './Tablero'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


function GetObjectRuleta(data=[]) {
    const result = []
    data.map(value=>{
        const structor={option:value.name};
        result.push(structor);
    })
    return result;
}






function ContainerRuleta({info}) {
    const [mustSpin, setMustSpin] = useState(false);
    const [stateButton, setStateButton]=useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [cont, setCont] = useState(0);
    const [winners, setWinners]=useState([]);
    const participantes =info.data;
    let ruletaPart = GetObjectRuleta(participantes);
    const [data, setData]=useState(ruletaPart)

    const handleWinners=()=>{
        if(cont !== 0){
            if(stateButton){
                setWinners([...winners,participantes[prizeNumber]]);
                setStateButton(false)
                if(data.length !== 1){
                    data.splice(prizeNumber,1)
                }
            }
        }
    }
    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
            setCont(cont+1)
            if(data.length !== 1){
                setStateButton(true)
            }else{
                setStateButton(false)
            }
        }
    }

    const exportToExcel = () => {
        // Crear una nueva hoja de cálculo
        const worksheet = XLSX.utils.json_to_sheet(winners);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    
        // Generar un archivo Excel
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    
        // Crear un blob a partir del buffer
        const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
        // Guardar el archivo
        saveAs(dataBlob, 'datos_personas.xlsx');
    };
    

    return (<section className="w-full h-4/5 flex">

        <div className='w-1/2 h-full flex justify-center items-center'>
            <Ruleta state={mustSpin} data={data} win={prizeNumber} changeState={setMustSpin}/>
        </div>
        
        <Tablero 
            state={mustSpin}
            cont={cont}
            handleSpinClick={handleSpinClick}
            data={participantes}
            prizeNumber={prizeNumber}
            handleWinners={handleWinners}
            winners={winners}
            exportToExcel={exportToExcel}
        />
    
    </section>);
}

export default ContainerRuleta;