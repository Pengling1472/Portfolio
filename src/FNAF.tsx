import gameplay from './assets/fnaf/fnaf_gameplay.mp4'
import thumbnailGameplay from './assets/fnaf/fnaf_gameplay.webp'
import arcades from './assets/fnaf/fnaf_arcades.mp4'
import music_man from './assets/fnaf/music_man.mp4'
import freddy from './assets/fnaf/freddy.mp4'

import { getProfile } from './Profile'

const timestamps: [ number, string ][][] = [ [
    [ 0, "Exploring" ],
    [ 58.216667, "Game starts" ],
    [ 87.85, "Jumpscare ( AUDIO WARNING )" ],
    [ 105.733333, "Playing as animatronic" ]
], [
    [ 0, "Arcade game #1 Parkour" ],
    [ 81.866667, "King Boo boss" ],
    [ 360.216667, "Arcade game #2 Maze" ],
    [ 547.866667, "Cupcake boss" ],
    [ 747.05, "Buying a mask" ]
] ]

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
                    <span>
                        <h2>Five Nights at Freddy's</h2>
                        <p>
                            All characters, musics, and sound effects in this project are owned by Scott Cawthon and Nintendo and the game's concept originates from Scott Cawthon. This project has been developed collaboratively by myself and my team. I programmed the majority of the game using JavaScript, and I've listed some of the features I've implemented below. 
                        </p>
                    </span>
                    <span>
                        <ul>
                            <li>Collectible coins</li>
                            <li>Door functionality</li>
                            <li>Time and power mechanics</li>
                            <li>Minecraft Server UI for game settings and shops</li>
                            <li>Minecraft Experimental Camera for the game's camera</li>
                            <li>JSON UI for the game's camera and displaying player coins</li>
                            <li>Animatronics jumpscare</li>
                            <li>In-game events</li>
                        </ul>
                    </span>
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
                    <video
                        id="video-0"
                        src={ gameplay }
                        controls
                        controlsList='nodownload'
                        preload='metadata'
                        poster={ thumbnailGameplay }
                    ></video>
                    <span>
                        <h2>Timestamps</h2>
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
                                            } }>
                                                { Math.floor( time / 60 ).toString().padStart( 2, "0" ) }:{ Math.floor( time % 60 ).toString().padStart( 2, "0" ) }    
                                            </span> - { string }
                                        </p>
                                    </>
                                )
                            } )
                        }
                    </span>
                    <span>
                        <h2>Arcades & Bosses</h2>
                        <ul>
                            <li>Items functionality for saving progress and teleporting to other players</li>
                            <li>JSON UI for player's health and death screen</li>
                            <li>Boss behavior and attack patterns</li>
                        </ul>
                    </span>
                    <video
                        id="video-1"
                        src={ arcades }
                        controls
                        controlsList='nodownload'
                        preload='metadata'
                        poster={ thumbnailGameplay }
                    ></video>
                    <span>
                        <h2>Timestamps</h2>
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
                                            } }>
                                                { Math.floor( time / 60 ).toString().padStart( 2, "0" ) }:{ Math.floor( time % 60 ).toString().padStart( 2, "0" ) }    
                                            </span> - { string }
                                        </p>
                                    </>
                                )
                            } )
                        }
                    </span>
                    <span>
                        <h2>Blockbench Models</h2>
                        <p>
                            I used Blockbench to make all the models for the map, I also designed the textures, particles, and animations. All of the custom item textures were made using Asesprite. Here are some of the models shown below.
                        </p>
                    </span>
                    <div className='parkour-tag-video'>
                        <video src={ music_man } loop autoPlay></video>
                        <video src={ freddy } loop autoPlay></video>
                    </div>
                </section>
            </article>
        </>
    )
}