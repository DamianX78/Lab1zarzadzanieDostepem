/* Jest to kod serwera Express */

/* Import frameworka express */
const express = require("express");
var path = require('path');

/* Uruchomienie express */
const app = express();

/* Funkcja służąca do authentykacji pobiera nagłówek autorization i dalej sprawdza czy taki nagłówek istnieje */
function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);

/* Jesli nagłówek nie istnieje !-zaprzeczenie wtedy zgłasza błąd autoryzacji */

	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}
/* Dekodowanie danych logowania zakodowanych w base64 na tekst */

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

/* Sprawdza czy user i password są zgodne, w naszym przypadku te pola są puste więc zalogowanie nastąpi jesli nic nie podaliśmy w polach user/password */

	if (user == '' && pass == '') {

		// If Authorized user
		next();

/* Jeśli coś podamy w polach user/password wystapi błąd logowania */

	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

/* Jeśli autentykacja została zakończona pomyślnie zostaniemy przeniesieni na strone http którą przygotowalismy w katalogu public */

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

/* Ustawienie serwera. Po wydaniu komendy node index.js dostajemy informację o działającym serwerze. Możemy się do niego podłlaczyć poprzez przeglądarkę www po podaniu w pasku adresowym: localhost:3000 */

// Server setup
app.listen((3000), () => {
	console.log("Server is Running");
})