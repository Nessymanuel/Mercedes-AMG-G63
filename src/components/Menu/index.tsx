import { CarFrontIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react'
import logo from '../../assets/logo.png'
import { useState } from 'react';

export function Menu() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='border-b-2 flex items-center justify-between px-8 '>
            <div className='py-2'>
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='flex items-center gap-8 text-zinc-600'>
                {/* Esconder se o Sidebar estiver aberto */}
                {!isSidebarOpen && (
                    <div className='flex gap-4'>
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
                        <div className='flex gap-1 items-center'>
                            <div className='pt-1'>
                                <CarFrontIcon size={18} />
                            </div>
                            <div>
                                <a href="">
                                    <p>Test Drive</p>
                                </a>
                            </div>
                        </div>
                    </div>
                )}


                <div className='flex gap-1' onClick={toggleSidebar}>
                    <MenuIcon size={24} color='black' />
                </div>
            </div>

            {/* Menu lateral */}
            {isSidebarOpen && (
                <div className="fixed top-0 right-0 h-full w-56 bg-black text-white z-50">
                    <button className="text-right p-4" onClick={toggleSidebar}>
                        <XIcon size={18} />
                    </button>
                    <nav className="flex flex-col gap-4 p-8">
                        <a href="#Characteristics" className="hover:text-gray-400">Caracteristicas</a>
                        <a href="#About" className="hover:text-gray-400">Sobre o G63</a>
                        <a href="#performance" className="hover:text-gray-400">Performance</a>
                        <a href="#gallery" className="hover:text-gray-400">Galeria</a>
                        <a href="/test-drive" className="hover:text-gray-400">Test Drive</a>
                        <a href="#contact" className="hover:text-gray-400">Contactos</a>
                    </nav>
                </div>
            )}
        </div>
    );
}
