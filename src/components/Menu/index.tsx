import { CarFrontIcon, MenuIcon, Phone, PhoneIcon } from 'lucide-react'
import logo from '../../assets/logo.png'

export function Menu() {
    return (
        <div className='border-b-2 flex items-center justify-between px-8 '>
            <div className='py-2'>
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='flex items-center gap-8  text-zinc-600'>
                <div className='flex gap-1 items-center'>
                    <div className='pt-1'>
                        <PhoneIcon size={18} />
                    </div>
                    <div>
                        <a href="">
                            <p>+244 930 000 000</p>
                        </a>
                    </div>
                </div>
                <div className='flex gap-1 items-center '>
                    <div className='pt-1'>
                        <CarFrontIcon size={18} />
                    </div>
                    <div>
                        <a href="">
                            <p>Test Drive</p>
                        </a>
                    </div>
                </div>
                <div className='flex gap-1' >
                    <a href="">
                        <MenuIcon size={24} color='black' />
                    </a>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}