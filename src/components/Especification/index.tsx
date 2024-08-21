import fte from '../../assets/especificacao.png'
import { Check, DotIcon } from 'lucide-react'

export function Especification() {
    return (
        <div className="px-16 pt-10 bg-black">
            <div className='flex justify-between items-center  pt-4 '>
                <div className=''>
                    <div className='font-semibold text-lg pb-10 text-white'>
                        <h1 className="text-xl font-semibold">ESPECIFICAÇÕES <span className="text-red-600">//</span></h1>

                        <div className='flex gap-1 items-center py-2'>
                            <Check size={18} color='red'/>
                            <p>Motor V8 biturbo de 4.0 litros com 585 CV</p>
                        </div>
                        <div className='flex gap-1 items-center py-1'>
                            <Check size={18} color='red'/>
                            <p>Aceleração de 0 a 100 km/h em 4,5 segundos</p>
                        </div>
                        <div className='flex gap-1 items-center py-1'>
                            <Check size={18} color='red'/>
                            <p>Sistema de tração integral permanente 4MATIC</p>
                        </div>
                        <div className='flex gap-1 py-1'>
                            <div className='pt-2'>
                                <Check size={18} color='red'/>
                            </div>
                            <p>Tela de infotainment MBUX de 12,3 polegadas com navegação</p>
                        </div>
                        <div className='flex gap-1 items-center py-1'>
                            <Check size={18} color='red'/>
                            <p>Bancos em couro Nappa com ajustes elétricos e função de memória</p>
                        </div>
                        <div className='flex gap-1 items-center py-1'>
                            <Check size={18} color='red'/>
                            <p>Suspensão adaptativa AMG para maior conforto e desempenho</p>
                        </div>
                        <div className='flex gap-1 items-center py-1'>
                            <Check size={18} color='red'/>
                            <p>Som surround Burmester de alta qualidade</p>
                        </div>



                    </div>
                    <div className="items-center   gap-4  flex py-4 font-semibold ">
                        <div className='items-center'>
                            <button className="bg-zinc-900 p-2  px-8  border-zinc-900 border-2 text-white rounded-md text-center whitespace-nowrap">
                                Teste Drive
                            </button>

                        </div>
                        <div className='items-center '>
                            <button className="p-2 px-4 border-zinc-900 border-2 text-white rounded-md text-center whitespace-nowrap">
                                Obter Catálogo
                            </button>

                        </div>

                    </div>

                </div>
                <div className='pb-16'>
                    <img src={fte} alt="" />
                </div>


            </div>
        </div>
    )
}