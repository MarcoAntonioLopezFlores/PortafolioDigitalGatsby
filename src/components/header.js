import React from 'react'
import imagen from '../images/yo.svg'
import Contact from './contact'

export default () => {

    return (
        <header className="bg-gray-300">
            <div className="container mx-auto p-12 max-w-4xl">
                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <h1 className="text-6xl font-bold text-purple-700">¡Hola! Soy Marco</h1>
                        <p className="text-xl">Soy estudiante de la UTEZ y he obtenido conocimientos sobre la programación y el desarrollo de software</p>
                    </div>
                    <img src={imagen} alt="Hombre desarrollando una aplicación" style={{ height: 300 }}></img>
                </div>
                <div>
                    <Contact></Contact>
                </div>
            </div>

        </header>
    )

}
