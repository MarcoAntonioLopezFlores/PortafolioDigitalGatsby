import React from 'react'

export default (props) => {
    const course = props.element
    return (


        <div className="shadow p-8 bg-white mr-4 rounded ">
            <h4 className="font-bold" href={course.url} target="_blank">{course.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius " >
                    Progreso: 100 %
                                </span>
            </div>
        </div>



    )
}