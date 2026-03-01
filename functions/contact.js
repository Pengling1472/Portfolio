export default async ( request, context ) => {
    if ( request.method != 'POST' ) return Response.json( 'Method not allowed!', { status: 405 } )
    
    try {
        const body = await request.json()

        const response = await fetch( `${process.env.WEBHOOK}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                embeds: [ {
                description:
`
# ${body.name}

Email: ${body.email}
Content: ${body.content}
`, 
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: `Contacted from your site.`
                    }
                } ]
            } )
        } )

        if ( !response.ok ) throw Error( 'There was an error sending the message!' )

        return Response.json( 'success', { status: 200, headers: { 'Content-Type': 'application/json' } } )
    } catch ( error ) {
        return Response.json( error.message, { status: 400 } )
    }
}