import gameplay from './assets/fnaf/fnaf_gameplay.mp4'
import thumbnailGameplay from './assets/fnaf/fnaf_gameplay.webp'
import arcades from './assets/fnaf/fnaf_arcades.mp4'
import music_man from './assets/fnaf/music_man.mp4'
import freddy from './assets/fnaf/freddy.mp4'

import { getProfile } from './Profile'

const timestamps: [ number, string ][][] = [ [
    [ 0, "Entrance with custom door" ],
    [ 17.716501, "Animatronics idle state and collectible coins" ],
    [ 23.895812, "The game's info and settings" ],
    [ 41.797785, "Shop for buying decorations & accessories" ],
    [ 58.216667, "Game starts" ],
    [ 61.696241, "Camera JSON UI & custom item" ],
    [ 65.954845, "Doors & lights mechanic with some interactable props" ],
    [ 87.85, "Jumpscare ( AUDIO WARNING )" ],
    [ 105.733333, "Playing the role of an animatronic (Movement programmed by PikaPower)" ]
], [
    [ 0, "Arcade game #1 Parkour" ],
    [ 9.36351, "1st floor parkour made by Echo" ],
    [ 33.083675, "2nd floor parkour made by Nani" ],
    [ 52.421619, "3rd floor parkour made by Nani" ],
    [ 81.866667, "King Boo boss" ],
    [ 360.216667, "Arcade game #2 Maze (Obstacles & traps made by Echo)" ],
    [ 466.932428, "Trick or treat mechanic (Town made by Nani)" ],
    [ 547.866667, "Cupcake boss" ],
    [ 747.05, "Buying item from the shop" ]
] ]

const videosCurrent: number[] = [
    -1,
    -1
]

const processFrame = ( id: number ) => {
    const video = document.getElementById( `video-${id}` ) as HTMLVideoElement
    const timestamp = document.getElementById( `video-${id}-timestamp` ) as HTMLSpanElement
    const list = timestamps[ id ].map( ( [ time ] ) => time )

    for ( let i = list.length - 1; i >= 0; i-- ) {
        if ( list[ i ] <= video.currentTime ) {
            if ( videosCurrent[ id ] != i ) {
                for ( const node of timestamp.children ) {
                    node.classList.remove( "timestamp-background" )
                }
                timestamp.children[ i ].classList.add( "timestamp-background" )
                videosCurrent[ id ] = i
            } 
            break
        }
    }

    if ( video.paused || video.seeking ) {
        videosCurrent[ id ] = -1
        return
    }

    requestAnimationFrame( () => {
        processFrame( id )
    } )
}

export default function FNAF() {
    return (
        <>
            <article>
                <section className="project-page">
                    <span>
                        <h2>Collaborators</h2>
                        <div className='collaborator-grid'>
                            { getProfile( "penguin1472", "Penguin1472", "Lead Developer" ) }
                            { getProfile( "pikapower97", "PikaPower97", "Systems Programmer" ) }
                            { getProfile( "nani-animatics", "Nani", "Environment Artist" ) }
                            { getProfile( "echo", "Echo", "Level Designer" ) }
                        </div>
                    </span>
                    <h1 className='center'>Five Nights at Freddy's</h1>
                    <span>
                        <p>
                            Scott Cawthon and Nintendo own all characters, music, and sound effects in this project, and the game's concept originates from Scott Cawthon. This project has been developed collaboratively by my team and me. My goal is to create a game that allows everyone to have fun and play together with friends in this blocky game, and to experience Five Nights at Freddy's in a free-roam style.
                            <br/><br/> 
                            This is a terror game in which the players take on the role of a security guard tasked with preventing animatronics from entering the office. Players use the camera and lights to track the movements of the animatronics and can close doors to keep them away. The objective is to survive until 6 AM to win. Playing with friends can take on the role of animatronics, and they can try to jumpscare the security guard. The game has arcade machines with fun mini-games ( parkour & maze ), and at the very end of the game, you enter into a boss battle. Winning these games can earn you some tokens, which can be used to buy accessories or decorations.    
                        </p>
                        <br/>
                        <ul>
                            <li><strong>Custom 3D Assets:</strong> Used Blockbench to design, texture, and animate all of the animatronics, furniture, and interactable props.</li>
                            <li><strong>Gameplay Logic:</strong> Scripted the Power, Door, and Camera system. Programmed JSON UI for displaying camera UI & death screen. Added logic to items for controlling animatronic and camera.</li>
                            <li><strong>Entity Behavior:</strong> Coded the animatronic to have different states. Idle for performing on stage, walking for when roaming at night, jumpscare that gets triggered when they enter the office, and other idle states for staring at the camera.</li>
                            <li><strong>In-Game Events:</strong> Implemented a collectible coin system and some rare events, one that spawns in a special animatronic in the office.</li>
                            <li><strong>Mini-Games & Bosses:</strong> Built functional arcade machines and a final boss battle to reward players with tokens, which can be used to buy decor or accessories.</li>
                        </ul>
                    </span>
                    <div className='parkour-tag-video'>
                        <video src={ music_man } loop autoPlay></video>
                        <video src={ freddy } loop autoPlay></video>
                    </div>
                    <div className="tags">
                        <span>
                            <a href="https://github.com/Pengling1472/FNAF-Behavior-Pack/blob/main/scripts/index.js" target="_blank">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" stroke="white" strokeWidth="1.3px"/>
                                </svg>
                                Source
                            </a>
                        </span>
                    </div>
                    <h2 className='center'>Gameplay</h2>
                    <video
                        id="video-0"
                        src={ gameplay }
                        controls
                        controlsList='nodownload'
                        preload='metadata'
                        poster={ thumbnailGameplay }
                        onPlay={ () => {
                            processFrame( 0 )
                        } }
                    ></video>
                    <span id='video-0-timestamp'>
                        {
                            timestamps[ 0 ].map( ( item, index ) => {
                                const [ time, string ] = item;

                                return (
                                    <>
                                        <p id={ index.toString() } className="timestamp">
                                            <span onClick={ ( event: React.MouseEvent ) => {
                                                const video = document.getElementById( "video-0" ) as HTMLVideoElement
                                                const element = ( event.target as HTMLElement ).parentNode as HTMLElement

                                                video.currentTime = timestamps[ 0 ][ parseInt( element.id ) ][ 0 ]
                                                video.play()

                                                setTimeout( () => {
                                                    processFrame( 0 )
                                                }, 300 );
                                            } }>
                                                { Math.floor( time / 60 ).toString().padStart( 2, "0" ) }:{ Math.floor( time % 60 ).toString().padStart( 2, "0" ) }    
                                            </span> - { string }
                                        </p>
                                    </>
                                )
                            } )
                        }
                    </span>
                    <h2 className='center'>Arcades & Bosses</h2>
                    <video
                        id="video-1"
                        src={ arcades }
                        controls
                        controlsList='nodownload'
                        preload='metadata'
                        poster={ thumbnailGameplay }
                        onPlay={ () => {
                            processFrame( 1 )
                        } }
                    ></video>
                    <span id='video-1-timestamp'>
                        {
                            timestamps[ 1 ].map( ( item, index ) => {
                                const [ time, string ] = item;

                                return (
                                    <>
                                        <p id={ index.toString() } className="timestamp">
                                            <span onClick={ ( event: React.MouseEvent ) => {
                                                const video = document.getElementById( "video-1" ) as HTMLVideoElement
                                                const element = ( event.target as HTMLElement ).parentNode as HTMLElement

                                                video.currentTime = timestamps[ 1 ][ parseInt( element.id ) ][ 0 ]
                                                video.play()

                                                setTimeout( () => {
                                                    processFrame( 1 )
                                                }, 300 );
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