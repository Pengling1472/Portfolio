import { resolve } from "path"

export default {
	resolve: {
		alias: {
		  	"@assets": resolve( __dirname, "src/assets" ),
		}
	},
    build: {
        rollupOptions: {
            input: {
                fnaf: resolve( __dirname, "five_nights_at_freddys/index.html" ),
                parkour_tag: resolve( __dirname, "parkour_tag/index.html" ),
                parkour_warrior: resolve( __dirname, "parkour_warrior/index.html" ),
                html: resolve( __dirname, "index.html" ),
            }
        }
    }
}