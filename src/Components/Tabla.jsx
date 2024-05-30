
function Tabla({winners}) {
    return ( 
    <table className='w-full h-full overscroll-y-auto '>
        <thead className='w-full h-14 m-0'>
        <tr className='w-full h-full flex justify-center items-center border-2 rounded-t bg-gradient-to-r from-cyan-300 to-blue-300'>
            <th className="w-1/4 h-full flex justify-center items-center">Num</th>
            <th className="w-3/4 h-full flex justify-center items-center">Ganadores</th>
        </tr>
        </thead>
        <tbody className='w-full h-full '>
            {winners.map((value, i)=>{
                return <TableRow key={i} content={value.name} num={i}/>
            })}
        </tbody>
    </table> );
}

export default Tabla;

function TableRow({content, num}) {
    return ( <tr className={`w-full h-10 flex`}>
        <td className=" w-1/4 h-full flex justify-center items-center border-2">{num + 1}</td>
        <td className=" w-3/4 h-full flex justify-center items-center border-2">{content}</td>
    </tr> );
}
