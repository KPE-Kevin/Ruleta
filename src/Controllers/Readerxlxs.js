import xlsx from 'xlsx-populate'
// import formulario from '@/Data/Feria'

function Readerxlxs() {
    let value
    xlsx.fromFileAsync('../Data/Feria.xlsx').then(workbook => {
        value = workbook.sheet('Formulario').useRange().value()
        console.log(value)
    })
}

export default Readerxlxs;



const data = fetch('http:')