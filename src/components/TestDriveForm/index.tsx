import { XIcon } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
    name: string;
    email: string;
    phone: string;
    date: string;
}

export function TestDriveForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        date: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implementar lógica de envio do formulário aqui
        console.log('Form Data:', formData);
    };

    return (
        <div className="px-8 py-10 bg-black text-white" id='test-drive'>
            <Link to="/">
                <button className='top-0'>

                    <XIcon />
                </button>
            </Link>

            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Solicite um Test Drive
                </h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-medium mb-2">Nome Completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-lg font-medium mb-2">Telefone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-lg font-medium mb-2">Data Preferida</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-red-600 p-3 px-6 border border-red-600 text-white rounded-md text-lg"
                        >
                            Enviar Solicitação
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
