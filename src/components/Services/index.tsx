import ft4 from '../../assets/dashing4.png'
import ft3 from '../../assets/dashing3.png'
import ftb from '../../assets/dashinback.png'
import ftf from '../../assets/front.png'

export function Services() {
    return (
        <div className="px-16  py-8 bg-black">
            <div className=" ">
                <h1 className="text-xl text-white font-semibold">SERVIÇOS <span className="text-red-600">//</span></h1>
            </div>
            <div className=" pt-8  font-semibold text-white justify-between flex">

                <div className='bg-red-600 text-3xl'>
                    <a href="">
                        <div className='flex gap-2 items-center p-6 pt-6 pb-52'>
                            <p>01</p>
                            <div className='border-2 w-80'>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <p className='px-8'>OFICINA </p>
                            <p className='px-8 pb-4'>GERAL</p>
                        </div>
                    </a>
                </div>
                <div className='bg-red-600 text-3xl'>
                    <a href="">
                        <div className='flex gap-2 items-center p-6 pt-6 pb-52'>
                            <p>02</p>
                            <div className='border-2 w-80'>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <p className='px-8'>TEST </p>
                            <p className='px-8 pb-4'>DRIVE</p>
                        </div>
                    </a>
                </div>
                <div className='bg-red-600 text-3xl'>
                    <a href="">
                        <div className='flex gap-2 items-center p-6 pt-6 pb-52'>
                            <p>03</p>
                            <div className='border-2 w-80'>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <p className='px-8'>RENT </p>
                            <p className='px-8 pb-4'>A CAR</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}