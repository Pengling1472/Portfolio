for ( const element of document.querySelectorAll( ".button" ) ) {
    element.addEventListener( "click", () => {
        const [ name, index ] = element.id.split( "_" )

        switch ( name ) {
            case "play":
                for ( const video of document.querySelectorAll( `#video_${index}` ) ) {
                    if ( video.currentTime > 0 ) {
                        video.pause()
                        video.currentTime = 0
                        continue
                    }

                    video.play()
                }
                break
            case "mute":
                const stroke = document.getElementById( `mutePath_${index}` ).style.stroke
                document.getElementById( `mutePath_${index}` ).style.stroke = stroke == "black" ? "white" : "black"
                for ( const video of document.querySelectorAll( `#video_${index}` ) ) {
                    video.muted = stroke == "black" ? false : true
                }
                break
        }
    } )
}