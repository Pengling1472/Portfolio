import parkour_warrior from './assets/main/parkour_warrior.webp'
import parkour_tag from './assets/main/parkour_tag.webp'
import fnaf from './assets/main/five_nights_at_freddys.webp'
import carrot_bot from './assets/main/carrot_bot.webp'
import forget_me_not from './assets/main/forget-me-not.webp'
import discord_activity from './assets/main/discord_activity.webp'
import sticker_website from './assets/main/sticker_website.webp'

import { getMiniProfile } from './Profile'

const iconGlobs: Record<string, string> = import.meta.glob( "./assets/icons/*.svg", {
    query: '?url',
    import: 'default',
    eager: true
} )

export const getIcons = ( ...args: [ string, string ][] ) => {
    return args.map( ( [ id, name ] ) => { 
        const iconPath = iconGlobs[ `./assets/icons/${id}.svg` ]

        return ( <p>
            <img src={ iconPath }/>
            { name }
        </p> )
    } )
}

export const projects = new Map<string, { banner: React.ReactNode, name: string, description: string, tags: React.ReactNode }>( [
    [ "parkour-warrior", {
        banner: <a href="/parkour-warrior">
            <img src={ parkour_warrior }/>
        </a>,
        name: "Parkour Warrior",
        description: "A fast paced, 10-minute parkour race for up to 10 teams. At the start of every match, a course is generated from a massive library. Teams are ranked based on how many coins they earn.",
        tags: <div className="tags">
            <span className='mini-profile'>
                { getMiniProfile( "pikapower97" ) }
                { getMiniProfile( "penguin1472" ) }
            </span>
            <span>
                { getIcons( [ 'javascript', 'Javascript' ] ) }
            </span>
            <span>
                <a href="/parkour-warrior">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" style={ { transform: "scale( 1.1, 1.1 )" } }>
                        <path d="M1.25 7.5a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 1 0 -12.5 0" stroke-width="1.5px"></path>
                        <path d="m7.5 10 0 -2.5" stroke-width="1.5px"></path>
                        <path d="m7.5 5 0.00625 0" stroke-width="1.5px"></path>
                    </svg>
                    Info
                </a>
                <a href="https://github.com/PikaPower97/PW/blob/main/scripts/index.js" target="_blank">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" strokeWidth="1.3px"/>
                    </svg>
                    Source
                </a>
            </span>
        </div>
    } ],
    [ "parkour-tag", {
        banner: <a href="/parkour-tag">
            <img src={ parkour_tag }/>
        </a>,
        name: "Parkour Tag",
        description: "A Minecraft game involving two teams, where the hunter must tag all of the runners.",
        tags: <div className="tags">
            <span className='mini-profile'>
                { getMiniProfile( "pikapower97" ) }
                { getMiniProfile( "penguin1472" ) }
            </span>
            <span>
                { getIcons( [ 'javascript', 'Javascript' ] ) }
            </span>
            <span>
                <a href="/parkour-tag">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" style={ { transform: "scale( 1.1, 1.1 )" } }>
                        <path d="M1.25 7.5a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 1 0 -12.5 0" stroke-width="1.5px"></path>
                        <path d="m7.5 10 0 -2.5" stroke-width="1.5px"></path>
                        <path d="m7.5 5 0.00625 0" stroke-width="1.5px"></path>
                    </svg>
                    Info
                </a>
                <a href="https://github.com/PikaPower97/PT/blob/main/scripts/index.js" target="_blank">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" strokeWidth="1.3px"/>
                    </svg>
                    Source
                </a>
            </span>
        </div>
    } ],
    [ "forget-me-not", {
        banner: <a href="/forget-me-not">
            <img src={ forget_me_not }/>
        </a>,
        name: "Forget Me Not",
        description: "An RPG game in which the main character finds themselves in an unknown world with islands that have different seasons, and they venture off to find a way back home.",
        tags: <div className="tags">
            <span className='mini-profile'>
                { getMiniProfile( "penguin1472" ) }
                { getMiniProfile( "nani-animatics" ) }
                { getMiniProfile( "pikapower97" ) }
                { getMiniProfile( "lune" ) }
            </span>
            <span>
                <p>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.006 0v1.6h15.988V0zm15.988 1.6v1.6h1.6V1.6zm1.6 1.6v14.4h-1.6v1.6H4.006v-1.6h-1.6V3.2H.809v17.6h1.599v1.6h1.599V24h15.988v-1.6h1.6v-1.6h1.598V3.2zm-19.187 0h1.599V1.6h-1.6zm4.796 3.2v6.4h1.6V6.4zm7.995 0v6.4h1.599V6.4z"/>
                    </svg>
                    Aseprite
                </p>
                { getIcons( [ 'cs', 'C#' ], [ 'godot', 'Godot' ] ) }
            </span>
            <span>
                <a href="/forget-me-not">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" style={ { transform: "scale( 1.1, 1.1 )" } }>
                        <path d="M1.25 7.5a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 1 0 -12.5 0" stroke-width="1.5px"></path>
                        <path d="m7.5 10 0 -2.5" stroke-width="1.5px"></path>
                        <path d="m7.5 5 0.00625 0" stroke-width="1.5px"></path>
                    </svg>
                    Info
                </a>
                <a href="https://github.com/Pengling1472/Forget-Me-Not" target="_blank">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" strokeWidth="1.3px"/>
                    </svg>
                    Source
                </a>
            </span>
        </div>
    } ],
        [ "five-nights-at-freddys", {
        banner: <a href="/five-nights-at-freddys">
            <img src={ fnaf }/>
        </a>,
        name: "Five Nights at Freddy's",
        description: "A recreated game built in Minecraft, where you can roam around the pizzeria and play as a security guard or animatronic. You can play arcade games which you can fight bosses.",
        tags: <div className="tags">
            <span className='mini-profile'>
                { getMiniProfile( "penguin1472" ) }
                { getMiniProfile( "pikapower97" ) }
                { getMiniProfile( "nani-animatics" ) }
                { getMiniProfile( "echo" ) }
            </span>
            <span>
                { getIcons( [ 'javascript', 'Javascript' ] ) }
                <p>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.651 3.277c-.25.002-1.009.057-3.47.226l-9.113.627c-3.044.208-2.743.18-2.888.27-.163.102-.254.274-.308.58-.451 2.177-.812 3.74-1.104 5.007-.015.04-.046.178-.07.306-.038.218-.037.239.012.307.105.144.23.176 1.14.294 4.78.63 8.905 1.164 13.412 1.765.931.124.948.125.99.022.032-.081.091-.36.207-.971.476-2.468 1.03-5.366 1.433-7.42.126-.642.132-.712.069-.82a.507.507 0 0 0-.153-.153c-.04-.024-.007-.042-.157-.04zM5.65 11.31c-.161.025-1.416.205-2.79.4-1.373.194-2.554.374-2.624.399-.21.076-.294.285-.194.478.062.12.215.19.7.324.065.018.15.043.19.056 4.54 1.274 9.338 2.68 13.583 3.888.238.071.563.197.77.197.157-.042 1.053-.484 3.082-1.505 1.649-.83 3.022-1.53 3.052-1.555.113-.099.173-.31.113-.402-.012-.018-.173-.055-.357-.082-3.949-.579-8.122-1.19-11.684-1.71-2.014-.29-2.635-.384-2.804-.422a3.329 3.329 0 0 0-.647-.09 2.254 2.254 0 0 0-.39.024zM4.32 14.55h-.016c-.054.011-1.122 2.303-1.122 2.407 0 .107.076.238.168.287.101.055.165.056.312.005.445-.139.918-.293 1.36-.425 1.316-.395 1.337-.403 1.477-.549.115-.12.328-.562.39-.811a.803.803 0 0 1 .057-.154c.02-.035.03-.065.024-.065-.768-.198-1.565-.415-2.292-.614a2.947 2.947 0 0 0-.358-.081zm13.52 1.843c-.07.04-.271.155-.448.254-.481.291-.937.593-1.446.833-.413.259-.594.315-.801.248a9.005 9.005 0 0 0-.786-.204.076.076 0 0 0-.067.05c-.23.643-.507 1.395-.74 2.053-.086.232-.236.767-.234.832.002.064.142.196.25.236a.551.551 0 0 0 .231.027c1.257-.51 2.215-1.15 3.284-1.71.327-.171.447-.29.494-.492.094-.407.182-.808.269-1.2.183-.812.194-.888.148-.961a.038.038 0 0 0-.035-.02c-.054.012-.08.036-.118.054z"/>
                    </svg>
                    Blockbench
                </p>
            </span>
            <span>
                <a href="/five-nights-at-freddys">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" style={ { transform: "scale( 1.1, 1.1 )" } }>
                        <path d="M1.25 7.5a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 1 0 -12.5 0" stroke-width="1.5px"></path>
                        <path d="m7.5 10 0 -2.5" stroke-width="1.5px"></path>
                        <path d="m7.5 5 0.00625 0" stroke-width="1.5px"></path>
                    </svg>
                    Info
                </a>
                <a href="https://github.com/Pengling1472/FNAF-Behavior-Pack/blob/main/scripts/index.js" target="_blank">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" strokeWidth="1.3px"/>
                    </svg>
                    Source
                </a>
            </span>
        </div>
    } ],
    [ "discord-bot", {
        banner: <a href="https://github.com/Pengling1472/Carrot-Bot/blob/main/index.js" target="_blank">
            <img src={ carrot_bot }/>
        </a>,
        name: "Discord Bot",
        description: "A multifunctional Discord bot that provides essential administrative tools, like logging important server activity.",
        tags: <div className="tags">
            <span className='mini-profile'>
                { getMiniProfile( "penguin1472" ) }
            </span>
            <span>
                { getIcons( [ 'javascript', 'Javascript' ], [ 'discordbots', 'Discord App' ], [ 'discordjs', 'Discord.js' ], [ 'nodejs', 'Node.js' ], [ 'mongodb', 'Mongo DB' ] ) }
            </span>
            <span>
                <a href="https://github.com/Pengling1472/Carrot-Bot/blob/main/index.js" target="_blank">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" strokeWidth="1.3px"/>
                    </svg>
                    Source
                </a>
            </span>
        </div>
    } ],
    [ "sticker-business", {
        banner: <a href="https://penglingscreations.store/Pingu" target="_blank">
            <img src={ sticker_website }/>
        </a>,
        name: "Sticker Business",
        description: "Developed a website where people can complete a form and upload their custom designs for sticker production.",
        tags: <div className="tags">
            <span className='mini-profile'>
                { getMiniProfile( "penguin1472" ) }
            </span>
            <span>
                { getIcons( [ 'typescript', 'Typescript' ], [ 'react', 'React' ], [ 'netlify', 'Netlify' ], [ 'vite', 'Vite' ], [ 'nodejs', 'Node.js' ], [ 'expressjs', 'Express.js' ], [ 'mongodb', 'Mongo DB' ] ) }
            </span>
            <span>
                <a href="https://penglingscreations.store/Pingu" target="_blank">
                    <svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={ { fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, fill: "white" } }>
                        <path d="M8.013,0C12.422,0.007 16,3.589 16,8C16,12.415 12.415,16 8,16C3.585,16 0,12.415 0,8C0,3.589 3.578,0.007 7.987,0L8.013,0ZM10.789,10.5C10.548,11.868 10.112,13.047 9.536,13.892C9.091,14.544 8.593,15 8,15C7.407,15 6.909,14.544 6.464,13.892C5.888,13.047 5.452,11.868 5.211,10.5L10.789,10.5ZM14.54,10.5C13.796,12.441 12.212,13.969 10.234,14.635C10.962,13.652 11.52,12.202 11.8,10.5L14.54,10.5ZM4.2,10.5C4.48,12.202 5.038,13.652 5.766,14.635C3.788,13.969 2.204,12.442 1.46,10.5L4.2,10.5ZM4.07,6.5C4.024,6.986 4,7.487 4,8C4,8.513 4.024,9.014 4.07,9.5L1.161,9.5C1.056,9.017 1,8.515 1,8C1,7.485 1.056,6.983 1.161,6.5L4.07,6.5ZM10.926,6.5C10.975,6.984 11,7.486 11,8C11,8.514 10.975,9.016 10.926,9.5L5.074,9.5C5.025,9.016 5,8.514 5,8C5,7.486 5.025,6.984 5.074,6.5L10.926,6.5ZM14.839,6.5C14.944,6.983 15,7.485 15,8C15,8.515 14.944,9.017 14.839,9.5L11.93,9.5C11.976,9.014 12,8.513 12,8C12,7.487 11.976,6.986 11.93,6.5L14.839,6.5ZM5.766,1.365C5.038,2.348 4.48,3.798 4.2,5.5L1.46,5.5C2.204,3.559 3.788,2.031 5.766,1.365ZM10.789,5.5L5.211,5.5C5.452,4.132 5.888,2.953 6.464,2.108C6.909,1.456 7.407,1 8,1C8.593,1 9.091,1.456 9.536,2.108C10.112,2.953 10.548,4.132 10.789,5.5ZM10.234,1.365C12.212,2.031 13.796,3.558 14.54,5.5L11.8,5.5C11.52,3.798 10.962,2.348 10.234,1.365Z"/>
                    </svg>
                    Website
                </a>
            </span>
        </div>
    } ],
    [ "discord-activity", {
        banner: <a href="https://github.com/Pengling1472/Discord-Activity-App" target="_blank">
            <img src={ discord_activity }/>
        </a>,
        name: "Discord Activity",
        description: "An app available on my Discord server that anyone can play a variety of fun games created by my team.",
        tags: <div className="tags">
            <span className='mini-profile'>
                { getMiniProfile( "penguin1472" ) }
                { getMiniProfile( "pikapower97" ) }
                { getMiniProfile( "nani-animatics" ) }
            </span>
            <span>
                { getIcons( [ 'javascript', 'Javascript' ], [ 'discordbots', 'Discord App' ], [ 'netlify', 'Netlify' ], [ 'vite', 'Vite' ], [ 'nodejs', 'Node.js' ], [ 'expressjs', 'Express.js' ], [ 'mongodb', 'Mongo DB' ], [ 'socketio', 'Socket.io' ] ) }
            </span>
            <span>
                <a href="https://github.com/Pengling1472/Discord-Activity-App" target="_blank">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path transform="matrix(79.6704,0,0,79.6704,-95.2248,-231.248)" d="M10,15.21C10,15.42 6.02,15.42 6.02,15.21C6.02,15.02 6.01,14.39 6.01,13.72C4,14.09 3.48,13.23 3.32,12.78C3.23,12.55 2.84,11.84 2.5,11.65C2.22,11.5 1.82,11.13 2.49,11.12C3.12,11.11 3.57,11.7 3.72,11.94C4.44,13.15 5.59,12.81 6.05,12.6C6.12,12.08 6.33,11.73 6.56,11.53C4.78,11.33 2.92,10.64 2.92,7.58C2.92,6.71 3.23,5.99 3.74,5.43C3.66,5.23 3.38,4.41 3.82,3.31C3.82,3.31 4.49,3.1 6.02,4.13C6.66,3.95 7.34,3.86 8.02,3.86C8.7,3.86 9.38,3.95 10.02,4.13C11.55,3.09 12.22,3.31 12.22,3.31C12.66,4.41 12.38,5.23 12.3,5.43C12.81,5.99 13.12,6.7 13.12,7.58C13.12,10.65 11.25,11.33 9.47,11.53C9.76,11.78 10.01,12.26 10.01,13.01C10.01,14.08 10,14.94 10,15.21Z" fill="none" strokeWidth="1.3px"/>
                    </svg>
                    Source
                </a>
            </span>
        </div>
    } ]
] )