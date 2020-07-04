/**
 * Config source: https://git.io/JfefC
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import { CorsConfig } from '@ioc:Adonis/Core/Cors'

const corsConfig: CorsConfig = {
	enabled: true,
	origin: '*',
	methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE'],
	headers: true,
	exposeHeaders: ['cache-control', 'content-language', 'content-type', 'expires', 'last-modified', 'pragma'],
	credentials: true,
	maxAge: 86400
}

export default corsConfig
