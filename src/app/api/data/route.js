'use server'
import XlsxPopulate from 'xlsx-populate';
import path from 'path';



export async function GET() {
    const answer = {
        status: "loading",
        data: null
    }
    try {
        const filePath = path.join(process.cwd(), 'src', 'Data', 'Feria.xlsx');
        const excel = await XlsxPopulate.fromFileAsync(filePath)
        const sheet = excel.sheet('Formulario');
        const data = await sheet.usedRange().value();
        answer.status = "success";
        answer.data = getDataJSON(data)
        return Response.json()
    } catch (error) {

    }
    return Response.json(answer)
}

function getDataJSON(data = []) {
    const result = [];

    data.map((value, i) => {
        if (i !== 0) {
            const structor = {
                name: value[2] + ' ' + value[3] + ' ' + value[4],
                email: value[1],
                semestre: value[7],
                phone: value[8]
            }
            result.push(structor)
        }
    });
    return result;
}