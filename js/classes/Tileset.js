class Tileset {
	constructor(url) {
		// Chargement de l'image dans l'attribut image
		this.image = new Image();
		this.image.onload = function() {
			if(!this.complete)
				throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
		}
		this.image.src = "tilesets/" + url;
	}

	// Méthode de dessin du tile numéro "numero" dans le contexte 2D "context" aux coordonnées x et y
	dessinerTile(numero, context, xDestination, yDestination) {
		context.drawImage(this.image, xDestination, yDestination, 10, 10, 10, 19);

		// this.referenceDuTileset.largeur = this.width / 32;
		// var xSourceEnTiles = numero % this.largeur;
		// if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;
		// var ySourceEnTiles = Math.ceil(numero / this.largeur);
		//
		// var xSource = (xSourceEnTiles - 1) * 32;
		// var ySource = (ySourceEnTiles - 1) * 32;
		// context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);

	}
}
