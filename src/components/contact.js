import React from 'react'

export default ()=> {
    
        return (
            <form className="mt-16 text-center">
                <label htmlFor="contact-content"className="block text-gray-700 text-sm font-bold mb-2">Cuentame de tus ideas que quieres hacer realidad:</label>
                <div className="flex shadow rounded p-2 border bg-white">
                <textarea 
                    id="contact-content"
                    name="contact-content"
                    className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                ></textarea>
                <button className="btnEnviar ml-4">Enviar</button>
                </div>
            </form>
        )
    
}