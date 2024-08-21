import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Performance() {
    return (
        <div className="px-16 py-10 bg-black text-white" id='performance'>
            <div className="container mx-auto pt-10">
                <h1 className="text-xl font-bold  mb-4">
                    PERFORMANCE <span className="text-red-600">//</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-950 p-6 rounded-sm shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Especificações</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Check size={20} color="red" />
                                <p className="ml-4 text-lg">Potência: 585 CV</p>
                            </div>
                            <div className="flex items-center">
                                <Check size={20} color="red" />
                                <p className="ml-4 text-lg">Aceleração: 0 a 100 km/h em 4,5 segundos</p>
                            </div>
                            <div className="flex items-center">
                                <Check size={20} color="red" />
                                <p className="ml-4 text-lg">Torque: 800 Nm</p>
                            </div>
                            <div className="flex items-center">
                                <Check size={20} color="red" />
                                <p className="ml-4 text-lg">Velocidade Máxima: 220 km/h</p>
                            </div>
                            <div className="flex items-center">
                                <Check size={20} color="red" />
                                <p className="ml-4 text-lg">Sistema de Tração: 4MATIC</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-950 p-6 rounded-sm shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Depoimentos</h2>
                        <div className="space-y-6">
                            <blockquote className="border-l-4 border-red-600 pl-4 italic">
                                <p className="text-lg">
                                    "O Mercedes G63 é um verdadeiro ícone. Sua combinação de potência e luxo é inigualável. Um veículo que mantém a tradição da marca enquanto abraça a inovação."
                                </p>
                                <footer className="mt-2 text-sm font-medium">- Car Magazine</footer>
                            </blockquote>
                            <blockquote className="border-l-4 border-red-600 pl-4 italic">
                                <p className="text-lg">
                                    "O desempenho do G63 é simplesmente espetacular. A aceleração e a força de tração são impressionantes, oferecendo uma experiência de condução inigualável."
                                </p>
                                <footer className="mt-2 text-sm font-medium">- Auto Week</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex justify-center gap-4">
                    <Link to="/test-drive">
                        <button className="bg-red-600 p-3 px-6 border border-red-600 text-white rounded-md text-lg hover:bg-red-700 transition-colors">
                            Teste Drive
                        </button>
                    </Link>
                    <button className="bg-gray-900 p-3 px-6 border border-gray-700 text-white rounded-md text-lg hover:bg-gray-800 transition-colors">
                        Obter Catálogo
                    </button>
                </div>
            </div>
        </div>
    );
}
