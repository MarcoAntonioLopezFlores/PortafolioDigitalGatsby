import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Post from './post'
import Certificate from './certificate'
import Course from './course'

export default () => {
    const data = useStaticQuery(graphql`
            {
                
                    codigofacilitoJson {
                      id
                      data {
                        certificates {
                          score
                          title
                          code
                        }
                        finished_courses {
                            title
                            url
                          }
                      }
                    }
                    
            }
        `)


    console.log(data)
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Post
                        data={data.codigofacilitoJson.data.certificates}
                        title="MIS CERTIFICADOS EN CODIGO FACILITO"
                        card={Certificate} />

                    <Post
                        data={data.codigofacilitoJson.data.finished_courses}
                        title="MIS CURSOS TERMINADOS"
                        card={Course} />

                    
                </div>

            </div>
        </section>
    )
}