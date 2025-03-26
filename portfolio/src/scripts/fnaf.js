const images = import.meta.glob( "../assets/fnaf/images/*.png", {
    query: '?url',
    import: 'default',
} )

for ( const image of Object.values( images ) ) {
    image().then( url => {
        document.getElementById( "images" ).insertAdjacentHTML( "beforeend", `<img style="height: 281px;" src="..${url}">` )
    } )
}