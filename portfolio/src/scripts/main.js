const elements = document.querySelectorAll( ".redirect" )

for ( const element of elements ) element.setAttribute( "href", `${element.id}/` )