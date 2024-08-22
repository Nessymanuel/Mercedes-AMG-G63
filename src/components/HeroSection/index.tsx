import { PhoneIcon } from 'lucide-react'
import front from '../../assets/front.png'


export function HeroSection() {
    return (
        <div className="relative bg-black h-[750px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${front})` }}>

            {/* Gradiente sobre a imagem */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" style={{ height: '100%' }}></div>

            <div className="flex flex-col text-left h-full justify-start pt-56 items-start relative z-10">
                <div className="max-w-xl ml-20 text-white pt-60">
                    <h1 className="text-6xl font-bold ">
                        Mercedes <br />AMG G 63
                    </h1>
                </div>
                <div className='py-12 pl-20'>
                    <button className="bg-black py-2 items-center  text-white  flex gap-2 px-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
                        <PhoneIcon size={18} color='white' />
                        Contacte-nos
                    </button>
                </div>
            </div>
        </div>
    );
}
