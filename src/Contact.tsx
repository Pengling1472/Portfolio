import { useState } from "react"

export default function Contact() {
    const [ alertMessage, setAlertMessage ] = useState( '' )
    const [ message, setMessage ] = useState( {
        name: '',
        email: '',
        content: ''
    } )

	const inputHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
		setMessage( { ...message, [ event.target.name ]: event.target.value } )
	}

    const textAreaHandler = ( event: React.ChangeEvent<HTMLTextAreaElement> ) => {
        setMessage( { ...message, content: event.target.value } )
	}    

    const submit = async () => {
        if ( Object.values( message ).includes( '' ) ) return setAlertMessage( 'Missing texts!' )

        const response = await fetch( `/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( message )
        } )

        if ( !response.ok ) return setAlertMessage( ( await response.text() ) == '' ? 'There was an error connecting to the server!' : await response.text() )

        window.location.href = `/success/contact`
    }

    return (
        <>
            <article>
                <section className="project-page">
                    <span>
                        <h1>Get in Touch</h1>
                        <p>
                            Whether you have a question about my shop, you’d like to collaborate on a project, or just want to say hi, feel free to reach out. I'm usually busy drawing or coding, but I'll get back to you as soon as I can.
                        </p>
                    </span>
                    <div className='column button'>
                        <div className='row'>
                            <input type="text" placeholder="Name" name='name' onChange={ inputHandler }/>
                        </div>
                        <div className='row'>
                            <input type="text" placeholder="Email" name='email' onChange={ inputHandler }/>
                        </div>
                        <div className='row'>
                            <textarea placeholder="Message" onChange={ textAreaHandler }/>
                        </div>
                    </div>
                    {
                        alertMessage && <p>
                            { alertMessage }
                        </p>
                    }
                    <div className='row button center'>
                        <label style={ { visibility: 'hidden' } }></label>
                        <label onClick={ submit }>Send</label>
                    </div>
                </section>
            </article>
        </>
    )
}