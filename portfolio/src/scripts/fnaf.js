const images = import.meta.glob( "../assets/fnaf/images/*.png", {
    query: '?url',
    import: 'default',
} );

( async () => {
    for ( const image of Object.values( images ) ) {
        await image().then( url => {
            document.getElementById( "images" ).insertAdjacentHTML( "beforeend", `<img style="height: 281px;" src="..${url}">` )
        } )
    } 
} )();

const timestamps = [ [
        [ 0, "Exploring" ],
        [ 58.216667, "Game starts" ],
        [ 87.85, "Jumpscare ( audio warning )" ],
        [ 105.733333, "Playing as animatronic" ]
    ], [
        [ 0, "Arcade game #1 Parkour" ],
        [ 81.866667, "King Boo boss" ],
        [ 360.216667, "Arcade game #2 Maze" ],
        [ 547.866667, "Cupcake boss" ],
        [ 747.05, "Buying a mask" ]
    ]
]

for ( let i = 0; i < timestamps.length; i++ ) document.getElementById( `timestamp_${i}` ).insertAdjacentHTML( "beforeend", timestamps[ i ].map( ( item, index ) => {
    const [ time, string ] = item;

    return `<a class="timestamp" id="${index}">${Math.floor( time / 60 ).toString().padStart( 2, "0" )}:${Math.floor( time % 60 ).toString().padStart( 2, "0" )} - ${string}</a>`
} ).join( "<br/>" ) )

for ( const item of document.querySelectorAll( ".timestamp" ) ) {
    item.addEventListener( "click", () => {
        const [ name, index ] = item.parentElement.id.split( "_" )
        
        document.getElementById( `video_${index}` ).currentTime = timestamps[ parseInt( index ) ][ parseInt( item.id ) ][ 0 ]
    } )
}