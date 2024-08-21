import { ArrowUpRight, FacebookIcon, Instagram, Linkedin, MailIcon, PhoneIcon } from "lucide-react";

export function Footer() {
    return (
        <div className="bg-zinc-950 " id="contact">
            <div className="mx-24 py-5">
                <div className="flex items-center justify-between"></div>
                <div className="text-white flex gap-14 font-medium text-sm mt-10 justify-between">
                    <ul>
                        <th className="font-bold text-lg pb-4 text-zinc-500">Serviços</th>
                        <li className="pb-4">
                            <a href="">Rent a Car</a>
                        </li>
                        <li className="pb-4">
                            <a href="">Test drive</a>
                        </li>
                        <li className="pb-4">
                            <a href="">Oficina geral</a>
                        </li>
                    </ul>
                    <ul>
                        <th className="font-bold text-lg pb-4 text-zinc-500">Contato</th>
                        <div className="flex gap-2 items-center pb-4">
                            <div className="pt-1">
                                <PhoneIcon size={18} />
                            </div>
                            <div>
                                <a href="">
                                    <p>+244 930 000 000</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="pt-1">
                                <MailIcon size={18} />
                            </div>
                            <div>
                                <a href="">
                                    <p>geral@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <th className="font-bold text-lg pb-4 text-zinc-500">Newsletter</th>
                        <p>Mantenha-se atualizado das últimas novidades</p>

                        <div className="rounded-sm flex pt-2">
                            <div>
                                <input
                                    type="text"
                                    placeholder="seu.email@dominio.com"
                                    className="bg-zinc-700 p-1 pl-3 rounded-l-sm"
                                />
                            </div>
                            <div>
                                <button>
                                    <div className="border-black border-2 p-1 bg-black rounded-l-sm">
                                        <ArrowUpRight size={18} color="white" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="font-semibold border-t-2 border-zinc-500   text-white mx-24 text-sm pt-10 pb-4 text-center">
              
                <div className="flex gap-4 items-center justify-center">
                    <div>
                        <a href="">
                            <div className="border-black border-2 p-1 bg-black rounded-full">
                                <FacebookIcon size={20} color="white" className="" />
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <div className="border-black border-2 p-1 bg-black rounded-full">
                                <Instagram size={20} color="white" />
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <div className="border-black border-2 p-1 bg-black rounded-full">
                                <Linkedin size={20} color="white" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
