import video from './assets/parkour-warrior/video.mp4'
import thumbnail from './assets/parkour-warrior/parkour_warrior.webp'

import { getProfile } from './Profile';

const timestamps : [ number, string ][] = [
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

let videoCurrent = -1

const processFrame = () => {
    const video = document.getElementById( `video` ) as HTMLVideoElement
    const timestamp = document.getElementById( `video-timestamp` ) as HTMLSpanElement
    const list = timestamps.map( ( [ time ] ) => time )

    for ( let i = list.length - 1; i >= 0; i-- ) {
        if ( list[ i ] <= video.currentTime ) {
            if ( videoCurrent != i ) {
                for ( const node of timestamp.children ) {
                    node.classList.remove( "timestamp-background" )
                }
                timestamp.children[ i ].classList.add( "timestamp-background" )
                videoCurrent = i
            } 
            break
        }
    }

    if ( video.paused || video.seeking ) {
        videoCurrent = -1
        return
    }

    requestAnimationFrame( processFrame )
}

export default function ParkourWarrior() {
    return (
        <>
            <article>
                <section className="project-page">
                    <span>
                        <h2>Collaborators</h2>
                        <div className='project-grid'>
                            { getProfile( "pikapower97", "PikaPower97", "Lead Developer" ) }
                            { getProfile( "penguin1472", "Penguin1472", "Systems Programmer" ) }
                        </div>
                    </span>
                    <h1 className='center'>Parkour Warrior</h1>
                    <span>
                        <p>
                            This project is inspired by MCC’s Parkour Warrior and was created purely for entertainment purposes. The project was done by a team of two. We used JavaScript as our programming language, I wrote scripts for  the checkpoints, which gave the players an item and their scores. I created an entity that displays the player scores and a leaderboard at the end of the game, along with some custom blocks for the map. I programmed the team functionality, timer, countdown, and used the Minecraft Server UI module to set up the UI for team selection and game settings.
                        </p>
                    </span>
                    <div className="tags">
                        <span>
                            <a href="https://github.com/PikaPower97/PW/blob/main/scripts/index.js" target="_blank">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" stroke="white" strokeWidth="1.3px"/>
                                </svg>
                                Source
                            </a>
                        </span>
                    </div>
                    <video
                        id="video"
                        src={ video }
                        controls
                        controlsList='nodownload'
                        preload='metadata'
                        poster={ thumbnail }
                        onPlay={ processFrame }
                    ></video>
                    <span id='video-timestamp'>
                        {
                            timestamps.map( ( item, index ) => {
                                const [ time, string ] = item;

                                return (
                                    <>
                                        <p id={ index.toString() } className="timestamp">
                                            <span onClick={ ( event: React.MouseEvent ) => {
                                                const video = document.getElementById( "video" ) as HTMLVideoElement
                                                const element = ( event.target as HTMLElement ).parentNode as HTMLElement

                                                video.currentTime = timestamps[ parseInt( element.id ) ][ 0 ]
                                                processFrame()
                                            } }>
                                                { Math.floor( time / 60 ).toString().padStart( 2, "0" ) }:{ Math.floor( time % 60 ).toString().padStart( 2, "0" ) }    
                                            </span> - { string }
                                        </p>
                                    </>
                                )
                            } )
                        }
                    </span>
                </section>
            </article>
        </>
    )
}