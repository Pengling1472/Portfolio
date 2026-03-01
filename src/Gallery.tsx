import { useState, useEffect } from 'react'

const drawingGlobs = import.meta.glob( "./assets/gallery/*.webp", {
    query: '?url',
    import: 'default',
    eager: true
} )

export default function Gallery() {
    const [ drawings, setDrawings ] = useState<Map<string, string>>( new Map() )

    let effectInit = false

    useEffect( () => {
        if ( effectInit ) return
        effectInit = true;

		( async () => {
			for ( const [ path, url ] of Object.entries( drawingGlobs ) ) {
				const drawingName = path.split( "/" ).pop()?.split( "." )[ 0 ] ?? "";

				setDrawings( drawings => {
					drawings.set( drawingName, url as string )

					return new Map( drawings )
				} )
			}
		} )()
    }, [] )

    return (
        <>
            <article>
                <section className="gallery-page">
                    <span>
                        <h1>Digital</h1>
                        <div className="gallery-grid-2">
                            { [ ...drawings.entries() ].filter( ( [ key ] ) => [ "sticker-default", "sticker-halloween", "sticker-christmas", "carrot", "diana", "pingu", "pingu-2", "pingu-3", "hazel-&-mochi" ].includes( key ) ).map( item => {
                                return (
                                    <img src={ item[ 1 ] }/>
                                )
                            } ) }
                        </div>
                    </span>
                    <span>
                        <h1>Traditional</h1>
                        <div className="gallery-grid-2">
                            { [ ...drawings.entries() ].filter( ( [ key ] ) => [ "eren", "ken", "komi", "mikasa", "ryuk", "zero" ].includes( key ) ).map( item => {
                                return (
                                    <img src={ item[ 1 ] }/>
                                )
                            } ) }
                        </div>
                    </span>
                    <span>
                        <h1>Blockbench</h1>
                        <div className="gallery-grid-2">
                            { [ ...drawings.entries() ].filter( ( [ key ] ) => [ "freddy", "bonnie", "chica", "foxy", "king_boo", "cupcake" ].includes( key ) ).map( item => {
                                return (
                                    <img src={ item[ 1 ] }/>
                                )
                            } ) }
                        </div>
                    </span>
                    <span>
                        <h1>Blender</h1>
                        <div className="gallery-grid-2">
                            { [ ...drawings.entries() ].filter( ( [ key ] ) => [ "penguin_fishing", "skull" ].includes( key ) ).map( item => {
                                return (
                                    <img src={ item[ 1 ] }/>
                                )
                            } ) }
                        </div>
                    </span>
                </section>
            </article>
        </>
    )
}