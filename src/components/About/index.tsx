
import ftf from '../../assets/img0.jpg'

export function About() {
    return (
        <div className="px-16 py-16 bg-black text-white" id='About'>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Imagem do Carro */}
                    <div className="w-full md:w-1/2  ">
                        <img src={ftf} alt="" />
                    </div>

                    {/* Texto Introdução */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-bold mb-6">
                            Mercedes G63: A Lenda do Off-Road
                        </h1>
                        <p className="text-lg mb-4">
                            O Mercedes G63 é mais do que um SUV; é um ícone que une potência, luxo e desempenho incomparáveis. Desde sua introdução, o G63 tem sido sinônimo de excelência no segmento de veículos off-road, oferecendo uma combinação imbatível de robustez e sofisticação.
                        </p>
                        <p className="text-lg mb-4">
                            Equipado com um motor V8 biturbo de 4.0 litros, o G63 proporciona uma aceleração impressionante e uma experiência de condução emocionante. Seu design distinto, com linhas marcantes e uma presença imponente, reflete tanto sua herança quanto sua modernidade.
                        </p>
                        <p className="text-lg">
                            Ideal para aqueles que buscam não apenas um veículo de alto desempenho, mas também um símbolo de status e prestígio. O Mercedes G63 é a escolha perfeita para quem deseja dominar qualquer terreno com estilo e confiança.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}