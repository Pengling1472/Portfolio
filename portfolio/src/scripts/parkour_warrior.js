const timestamps = [
    [ 21.541667, "Beginning/Section 1 Bonus Path" ],
    [ 143, "Section 1 Main Path" ],
    [ 178.958333, "Section 2 Bonus Path" ],
    [ 207.666667, "Section 2 Main Path" ],
    [ 238.25, "Section 3 Bonus Path" ],
    [ 356.375, "Section 3 Main Path" ],
    [ 399.041667, "Section 4 Bonus Path" ],
    [ 454.25, "Section 4 Main Path" ],
    [ 495.916667, "Section 5 Bonus Path" ],
    [ 529.083333, "Section 5 Main Path" ],
    [ 570.416667, "Final Section" ],
    [ 615.708333, "Results" ]
]

document.getElementById( "video_element" ).insertAdjacentHTML( "beforeend", timestamps.map( ( item, index ) => {
    const [ time, string ] = item;

    return `<a class="timestamp" id="${index}">${Math.floor( time / 60 ).toString().padStart( 2, "0" )}:${Math.floor( time % 60 ).toString().padStart( 2, "0" )} - ${string}</a>`
} ).join( "<br/>" ) )

for ( const element of document.querySelectorAll( ".timestamp" ) ) {
    element.addEventListener( "click", () => {
        const video = document.getElementById( "video" )

        console.log( video.duration )

        video.currentTime = ( timestamps[ element.id ][ 0 ] ) 
    } )
}