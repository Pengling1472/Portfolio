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
                    <h1 className="center">Pictures</h1>
                    <span>
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
                    <h1 className="center">Digital Art</h1>
                    <span>
                        <div className="gallery-grid-2 gallery-grid-3">
                            { getImage( "sticker-default", "hazel-&-mochi", "diana", "sticker-halloween", "sticker-christmas", "pingu", "pingu-2", "pingu-3", "carrot" ) }
                        </div>
                    </span>
                    <h1 className="center">Traditional Art</h1>
                    <span>
                        <div className="gallery-grid-2 gallery-grid-4">
                            { getImage( "eren", "ken", "komi", "mikasa", "ryuk", "zero" ) }
                        </div>
                    </span>
                    <h1 className="center">Blockbench Models</h1>
                    <span>
                        <div className="gallery-grid-2 gallery-grid-4">
                            { getImage( "freddy", "bonnie", "chica", "foxy", "king_boo", "cupcake" ) }
                        </div>
                    </span>
                    <h1 className="center">Blender</h1>
                    <span>
                        <div className="gallery-grid-2 gallery-grid-4">
                            { getImage( "penguin_fishing", "skull" ) }
                        </div>
                    </span>
                </section>
            </article>
        </>
    )
}