import Image from 'next/image'

function Header() {
    return ( <>
        <header 
        className='w-full h-1/5 
        flex justify-evenly items-center 
        shadow-xl bg-gradient-to-r from-cyan-300 to-blue-300'>
            <Image className=' w-auto' width={300} height={300} src="/Image/LogoItsoeh.png" alt="ITSOEH" />
            <div className=" w-1/2 flex flex-col justify-center items-center">
                <h1 
                    className='my-1 text-xl 
                    font-extrabold text-gray-700'>
                        Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
                </h1>
                <h2 
                    className='my-1 text-xl 
                    font-extrabold text-gray-700'>
                        Ingeniería en Tecnologías de la Información y Comunicaciones
                </h2>
            </div>
            <Image className='h-3/4' width={100} height={100} src="/Image/LogoTics.png" alt="ITICs" />
    </header>
    </> );
}

export default Header;