import mainMenu from "./assets/forget-me-not/main-menu.webp"
import springGreatTree from "./assets/forget-me-not/spring-great-tree.webp"
import springForest from "./assets/forget-me-not/spring-forest.webp"
import eggHunt from "./assets/forget-me-not/egg-hunt.webp"
import springTown from "./assets/forget-me-not/spring-town.webp"
import throneRoomEntrance from "./assets/forget-me-not/throne-room-entrance.webp"
import pendantAllSeason from "./assets/forget-me-not/pendent-all-season.webp"
import weaponsConceptStaff from "./assets/forget-me-not/weapons-concept-staff.webp"
import gestureWithWeapons from "./assets/forget-me-not/gesture-with-wepons.webp"

import { getProfile } from './Profile';

export default function ForgetMeNot() {
    return (
        <>
            <article>
                <section className="project-page">
                    <span>
                        <h1>Collaborators</h1>
                        <div className='project-grid'>
                            { getProfile( "penguin1472", "Penguin1472", "Lead Developer" ) }
                            { getProfile( "nani-animatics", "Nani", "Art Director & Writer" ) }
                            { getProfile( "pikapower97", "PikaPower97", "Systems Programmer" ) }
                            { getProfile( "lune", "Lune", "Concept Artist" ) }
                        </div>
                    </span>
                    <img className="image" src={ mainMenu }/>
                    <span>
                        <h1>Forget Me Not</h1>
                        <p>
                            This project is an RPG adventure game that has some horror aspects and a pixel art style. It is being developed using the Godot game engine and is programmed in C#, and all of the pixel art is being made in Aseprite.
                            <br/><br/>
                            As the Lead Developer, I am responsible for the core game systems. I also handle the pixel art, creating and animating character sprites. I manage the project UI by making designs and adding functionality. I use Git to maintain the project, merging PikaPower’s feature branches into the main build.
                            <br/><br/>
                            The project is a collaborative effort, with a dedicated team contributing their expertise. Nani, the co-founder, is responsible for crafting the game’s narrative and producing high-quality artwork. Pikapower focuses on complex programming tasks that involve the game’s mechanics and level design, while Lune, who works under Nani’s direction, creates concept art for the game.
                            <br/><br/>
                            Currently, the project is in early production, so not much content will be shown at this time.
                        </p>
                    </span>
                    <span>
                        <h1>Nani's Concept Art</h1>
                        <div className="gallery-grid-2">
                            <img src={ springGreatTree }/>
                            <img src={ springForest }/>
                            <img src={ springTown }/>
                            <img src={ eggHunt }/>
                            <img src={ throneRoomEntrance }/>
                            <img src={ pendantAllSeason }/>
                            <img src={ weaponsConceptStaff }/>
                            <img src={ gestureWithWeapons }/>
                        </div>
                    </span>
                </section>
            </article>
        </>
    )
}