import parkourTagOriginalPika from './assets/parkour-tag/parkour_tag_original_pika.mp4'
import parkourTagOriginalPingu from './assets/parkour-tag/parkour_tag_original_pingu.mp4'
import parkourTagReplicatedPika from './assets/parkour-tag/parkour_tag_replicated_pika.mp4'
import parkourTagReplicatedPingu from './assets/parkour-tag/parkour_tag_replicated_pingu.mp4'

import { getProfile } from './Profile'
import { useState } from 'react'

const volumeIcon = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="white" d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="white" d="M333.1 34.8C344.6 40 352 51.4 352 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352 96 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/>
    </svg>
]

export default function ParkourTag() {
    const [ videoMuted, setVideoMuted ] = useState<Map<number, boolean>>( new Map( [
        [ 0, false ],
        [ 1, false ]
    ] ) )

    const setMutedValue = ( index: number ) => {
        setVideoMuted( videoMuted => {
            const newMap = new Map( videoMuted )
            const mutedValue = !( videoMuted.get( index ) ?? false )
            newMap.set( index, mutedValue )

            for ( const video of document.querySelectorAll( `#video-${index}` ) as NodeListOf<HTMLVideoElement> ) video.muted = !mutedValue

            return newMap
        } )
    }

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
                    <h1 className='center'>Parkour Tag</h1>
                    <span>
                        <p>
                            The idea of the game is not ours and it's from MCC's Parkour Tag. This project was developed by a two-person team, and below it is shown both of our perspectives on playing the game.
                        </p>
                    </span>
                    <div className='parkour-tag-video'>
                        <video
                            id="video-0"
                            src={ parkourTagOriginalPingu }
                            controls
                            muted
                            controlsList='nodownload'
                            preload='metadata'
                        ></video>
                        <video
                            id="video-0"
                            src={ parkourTagOriginalPika }
                            controls
                            muted
                            controlsList='nodownload'
                            preload='metadata'
                        ></video>
                    </div>
                    <span>
                        <h2>Original Map</h2>
                        <p>
                            We originally made this map, but we noticed that the build size is too large for a parkour tag. I used command blocks to run the game and made a compass that the hunter obtained, which directs them to the nearest runner. I also made a spectator mode that focuses on the hunter if the runner is eliminated.
                        </p>
                    </span>
                    <div className="tags">
                        <span>
                            <a style={ { cursor: "pointer" } } onClick={ () => {
                                for ( const video of document.querySelectorAll( "#video-0" ) as NodeListOf<HTMLVideoElement> ) {
                                    video.currentTime = 0
                                    video.play()
                                }
                            } }>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                                Play both video
                            </a>
                            <a style={ { cursor: "pointer" } } onClick={ () => {
                                setMutedValue( 0 )
                            } }>
                                { volumeIcon[ ~~( videoMuted?.get( 0 ) ?? 0 ) ] }
                                { [ 'Muted', 'Unmuted' ][ ~~( videoMuted?.get( 0 ) ?? 0 ) ] }
                            </a>
                        </span>
                    </div>
                    <div className='parkour-tag-video'>
                        <video
                            id="video-1"
                            src={ parkourTagReplicatedPingu }
                            controls
                            muted
                            controlsList='nodownload'
                            preload='metadata'
                        ></video>
                        <video
                            id="video-1"
                            src={ parkourTagReplicatedPika }
                            controls
                            muted
                            controlsList='nodownload'
                            preload='metadata'
                        ></video>
                    </div>
                    <span>
                        <h2>Replicated Map</h2>
                        <p>
                            The map itself was sourced from the Internet and is not our original creation. After learning Minecraft Scripting API, I programmed the game with Javascript and used Minecraft Server UI Module to have UI for team selection and game settings, coded the countdown and timer for the game.
                        </p>
                    </span>
                    <div className="tags">
                        <span>
                            <a style={ { cursor: "pointer" } } onClick={ () => {
                                for ( const video of document.querySelectorAll( "#video-1" ) as NodeListOf<HTMLVideoElement> ) {
                                    video.currentTime = 0
                                    video.play()
                                }
                            } }>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                                Play both video
                            </a>
                            <a style={ { cursor: "pointer" } } onClick={ () => {
                                setMutedValue( 1 )
                            } }>
                                { volumeIcon[ ~~( videoMuted?.get( 1 ) ?? 0 ) ] }
                                { [ 'Muted', 'Unmuted' ][ ~~( videoMuted?.get( 1 ) ?? 0 ) ] }
                            </a>
                            <a href="https://github.com/PikaPower97/PT/blob/main/scripts/index.js" target="_blank">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" stroke="white" strokeWidth="1.3px"/>
                                </svg>
                                Source
                            </a>
                        </span>
                    </div>
                </section>
            </article>
        </>
    )
}