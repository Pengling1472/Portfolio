const drawingGlobs: Record<string, string> = import.meta.glob( "./assets/gallery/*.webp", {
    query: '?url',
    import: 'default',
    eager: true
} )

export const getImage = ( ...args: string[] ) => {
    return args.map( id => { 
        const iconPath: string = drawingGlobs[ `./assets/gallery/${id}.webp` ]

        return ( <div>
            <img src={ iconPath }/>
        </div> )
    } )
}

export default function Gallery() {
    return (
        <>
            <article>
                <section className="gallery-page">
                    <span>
                        <h2>Pictures</h2>
                        <div className="gallery-grid-2 gallery-grid-5">
                            { getImage(
                                "clouds",
                                "bee",
                                "baby-lamb",
                                "thomas",
                                "butterfly",
                                "cat",
                                "flowers",
                                "jumping-spider",
                                "rose",
                                "spider",
                                "sunset",
                                "sunset-2",
                                "vehicle" ) }
                        </div>
                    </span>
                    <span>
                        <h2>Digital</h2>
                        <div className="gallery-grid-2 gallery-grid-3">
                            { getImage( "sticker-default", "hazel-&-mochi", "diana", "sticker-halloween", "sticker-christmas", "pingu", "pingu-2", "pingu-3", "carrot" ) }
                        </div>
                    </span>
                    <span>
                        <h2>Traditional</h2>
                        <div className="gallery-grid-2 gallery-grid-4">
                            { getImage( "eren", "ken", "komi", "mikasa", "ryuk", "zero" ) }
                        </div>
                    </span>
                    <span>
                        <h2>Blockbench</h2>
                        <div className="gallery-grid-2 gallery-grid-4">
                            { getImage( "freddy", "bonnie", "chica", "foxy", "king_boo", "cupcake" ) }
                        </div>
                    </span>
                    <span>
                        <h2>Blender</h2>
                        <div className="gallery-grid-2 gallery-grid-4">
                            { getImage( "penguin_fishing", "skull" ) }
                        </div>
                    </span>
                </section>
            </article>
        </>
    )
}