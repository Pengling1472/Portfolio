import { projects } from './projects-data'
// import { useState } from 'react'

export default function Projects() {
    // const [ placeholderTags, setPlaceholderTags ] = useState<string[]>( [] )
    // const [ focused, setFocused ] = useState<boolean>( false )
    // const [ tags, setTags ] = useState<string[]>( [] )

    // const filteredTags = [
    //     "javascript",
    //     "vite",
    //     "railway",
    //     "typescript",
    //     "blockbench",
    //     "netlify",
    //     "aseprite",
    //     "godot",
    //     "discord app",
    //     "node.js",
    //     "mongo db",
    //     "socket.io",
    //     "discord.js",
    //     "express.js",
    //     "c#"
    // ]

    // const addTag = ( event: React.MouseEvent, tag: string ) => {
    //     if ( tags.includes( tag ) ) return tags

    //     const input = ( event.target as HTMLLabelElement ).parentNode?.parentNode?.querySelector( "input" ) as HTMLInputElement
    //     input.value = ""

    //     setPlaceholderTags( [] )
    //     setTags( [ ...tags, tag ] )
    // }

    return (
    <>
        <article>
            {/* {
                !!tags.length && <section className="skills">
                    <span>
                        <h1>Filtered Tags</h1>
                        <div className="tags">
                            <span>
                                { tags.join( ", " ) }
                            </span>
                        </div>
                    </span>
                </section>
            } */}
            <section className="projects">
                <h1 className='center'>Projects</h1>
                <span>
                    {/* <div className="dropdown-text">
                        <label>Filter</label>
                        <div>
                            <input type="text" onInput={ ( event ) => {
                                const target = event.target as HTMLInputElement
                                const value = target.value

                                const filtered = filteredTags.filter( string => !!value ? string.startsWith( value.toLowerCase() ) : false )
                                
                                setPlaceholderTags( filtered );
                            } } onBlur={ () => {
                                setTimeout( () => setFocused( false ), 100 )
                            } } onFocus={ () => setFocused( true ) }/>
                            <span style={ { display: focused ? !!placeholderTags.length ? "flex" : "none" : "none" } }>
                                { placeholderTags.map( string => <label onClick={ event => addTag( event, string ) }>
                                    { string }
                                </label> ) }
                            </span>
                        </div>
                    </div>   */}
                </span>
                <div className="project-grid">
                    {
                        [ ...projects.values() ].map( value => {
                            const { banner, name, description, tags } = value
                            
                            return <div className="project-background">
                                { banner }
                                <div>
                                    <h4>{ name }</h4>
                                    <p>{ description }</p>
                                </div>
                                { tags }
                            </div>
                        } )
                    }
                </div>
            </section>
        </article>
    </>
    )
}