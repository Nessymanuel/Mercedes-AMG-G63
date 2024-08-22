import { Car, Cpu, Home, Mountain } from 'lucide-react';

export function Characteristics() {
    return (
        <div className="text-white p-20 bg-black " id='Characteristics'>
            <div className="text-base font-medium flex flex-wrap justify-between w-full">
                <div className='p-5 text-center flex-1 min-w-[200px]'>
                    <div className="mb-4">
                        <Car className="w-12 h-12 mx-auto " />
                    </div>
                    <p className="pb-1 font-serif text-lg">Potência do Motor</p>
                    <p className='text-3xl font-bold'>585 CV</p>
                    <p className="text-sm">Motor V8 biturbo</p>
                </div>
        
                <div className='p-5 text-center flex-1 min-w-[200px]'>
                    <div className="mb-4">
                        <Cpu className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="pb-1 font-serif text-lg">Tecnologia Avançada</p>
                    <p className='text-3xl font-bold'>Infotainment & Assistência</p>
                    <p className="text-sm">Sistemas de última geração</p>
                </div>
        
                <div className='p-5 text-center flex-1 min-w-[200px]'>
                    <div className="mb-4">
                        <Home className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="pb-1 font-serif text-lg">Luxo Interior</p>
                    <p className='text-3xl font-bold'>Detalhes Premium</p>
                    <p className="text-sm">Acabamentos em couro e madeira</p>
                </div>
        
                <div className='p-5 text-center flex-1 min-w-[200px]'>
                    <div className="mb-4">
                        <Mountain className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="pb-1 font-serif text-lg">Capacidade Off-Road</p>
                    <p className='text-3xl font-bold'>Aventura Sem Limites</p>
                    <p className="text-sm">Tração nas quatro rodas e suspensões robustas</p>
                </div>
            </div>
        </div>
    );
}
