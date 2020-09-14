
const express = require('express');
const path = require('path');

//

const PORT = process.env.PORT || 5000

//

const app = express()

	.use( express.static( path.join( __dirname, 'dist' ) ) )

	.get( '*', (req, res) => {

		res.sendFile( path.join( __dirname, 'dist', 'index.html' ) )

	})

	.listen( PORT, (err) => {

		if ( err ) console.error( err )

		console.log( 'app listening on port ' + PORT )

	})