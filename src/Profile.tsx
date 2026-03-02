const profileGlobs: Record<string, string> = import.meta.glob( "./assets/profiles/*.webp", {
    query: '?url',
    import: 'default',
    eager: true
} )

export const getProfile = ( id: string, name: string, role: string ) => {
    const profilePath = profileGlobs[ `./assets/profiles/${id}.webp` ]

    return ( <div className="collaborator">
        <img src={ profilePath }/>
        <div>
            <h4>{ name }</h4>
            <p>{ role }</p>
        </div>
    </div> )
}

export const getMiniProfile = ( id: string ) => {
    const profilePath = profileGlobs[ `./assets/profiles/${id}.webp` ]

    return ( <img src={ profilePath }/> )
}