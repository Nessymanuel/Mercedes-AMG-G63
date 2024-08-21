export function AboutUs() {
    return (
        <div className=" text-white p-20 h-full bg-black items-center">
            <div className="text-base font-medium flex justify-between w-full ">
                <div className='p-5 text-start' >
                    <p className="pb-1 font-serif">Até</p>
                    <p className='text-2xl font-bold'>585 CV</p>
                    <p className="text-sm"> Potência nominal</p>
                </div>

                <div className='p-5 text-start'>
                    <p className="pb-1 font-serif">Até</p>
                    <p className='text-2xl font-bold'>800 Nm</p>
                    <p className="text-sm">Binário</p>
                </div>

                <div className='p-5 text-start'>
                    <p className="pb-1 font-serif">Em </p>
                    <p className='text-2xl font-bold'>4,4s</p>
                    <p className="text-sm">dos 0 aos 100 km/h</p>
                </div>

                <div className='p-5 text-start'>
                    <p className="pb-1 font-serif">Até</p>
                    <p className='text-2xl font-bold'>220 km/h</p>
                    <p className="text-sm">  Velocidade máxima</p>
                </div>
            </div>

        </div>
    );
}
