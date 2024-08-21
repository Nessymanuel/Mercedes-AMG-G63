import ft4 from '../../assets/img4.jpg';
import ft3 from '../../assets/img3.jpg';
import ftb from '../../assets/img2.jpg';
import ftc from '../../assets/interior.png';

export function Galeria() {
    return (
        <div className=" px-16 pt-10 bg-black " id='gallery'>
            <div>
                <h1 className="text-xl font-semibold text-white">GALERIA <span className="text-red-600">//</span></h1>
            </div>

            <div className="grid grid-cols-[60%,40%] pt-4 gap-8">
                <div className="flex justify-center items-center">
                    <img src={ftc} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="row-span-2 ">
                    <img src={ft4} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-8">
                    <div className='w-full'>
                        <img src={ft3} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full '>
                        <img src={ftb} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}
