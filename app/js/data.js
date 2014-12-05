/* ========================================================================= */
/* DATOS =================================================================== */
/* ========================================================================= */

var categories = [
	{ name: 'Fruta', score: 1 }, 					// categoriesId[0]
	{ name: 'Vegetales', score: 1 }, 				// categoriesId[1]
	{ name: 'Tubérculo', score: 1 }, 				// categoriesId[2]
	{ name: 'Postres', score: 2 }, 					// categoriesId[3]
	{ name: 'Directo del mar', score: 2 }, 			// categoriesId[4]
	{ name: 'Made in Canary Island', score: 3 }, 	// categoriesId[5]
	{ name: 'Vegano', score: 5 }, 					// categoriesId[6]
	{ name: 'Diariamente', score: 3 } 				// categoriesId[7]

];

// Añadimos el campo special edit a la categoría Diariamente
_.extend(categories[7], { special: {edit: true} });

var categoriesId = [];

// Asignamos un id único a cada categoría y lo guardamos
_.each(categories, function (category) {
	var id = _.uniqueId('category_');
	categoriesId.push(id);
	_.extend(category, {_id: id});
});

var items = [
	{ name: 'Aguacate', picture: 'images/items/aguacate.png', color: 'lightblue', categoriesId: [ categoriesId[0], categoriesId[6] ], resHeight: true },			// itemsId[0]
	{ name: 'Arroz con leche', picture: 'images/items/arroz-leche.png', color: 'green', categoriesId: [ categoriesId[3] ] },										// itemsId[1]
	{ name: 'Batata', picture: 'images/items/batata.png', color: 'royalblue', categoriesId: [ categoriesId[2], categoriesId[6] ] },									// itemsId[2]
	{ name: 'Berros', picture: 'images/items/berros.png', color: 'lightblue', categoriesId: [ categoriesId[1], categoriesId[6] ], resHeight: true },				// itemsId[3]
	{ name: 'Bizcocho de Moya', picture: 'images/items/bizcocho-moya.png', color: 'pink', categoriesId: [ categoriesId[3], categoriesId[5] ] },						// itemsId[4]
	{ name: 'Chorizo de Teror', picture: 'images/items/chorizo-teror.png', color: 'yellow', categoriesId: [ categoriesId[5] ] },									// itemsId[5]
	{ name: 'Cilantro', picture: 'images/items/cilantro.png', color: 'lightblue', categoriesId: [ categoriesId[1], categoriesId[6] ], resHeight: true },			// itemsId[6]
	{ name: 'Clipper de fresa', picture: 'images/items/clipper-fresa.png', color: 'yellow', categoriesId: [ categoriesId[5], categoriesId[6] ], resHeight: true },	// itemsId[7]
	{ name: 'Gofio Escaldado', picture: 'images/items/gofio-escaldado.png', color: 'yellow', categoriesId: [ categoriesId[5] ] },									// itemsId[8]
	{ name: 'Gofio', picture: 'images/items/gofio.png', color: 'royalblue', categoriesId: [ categoriesId[5], categoriesId[6] ] },									// itemsId[9]
	{ name: 'Miel de Palma', picture: 'images/items/miel-palma.png', color: 'yellow', categoriesId: [ categoriesId[3], categoriesId[5] ], resHeight: true },		// itemsId[10]
	{ name: 'Mojo picón', picture: 'images/items/mojo-picon.png', color: 'royalblue', categoriesId: [ categoriesId[5], categoriesId[6] ], resHeight: true },		// itemsId[11]
	{ name: 'Mojo verde', picture: 'images/items/mojo-verde.png', color: 'pink', categoriesId: [ categoriesId[5], categoriesId[6] ], resHeight: true },				// itemsId[12]
	{ name: 'Pan', picture: 'images/items/pan.png', color: 'pink', categoriesId: [ categoriesId[7] ] },																// itemsId[13]
	{ name: 'Papa arrugada', picture: 'images/items/papa-arrugada.png', color: 'yellow', categoriesId: [ categoriesId[2], categoriesId[5], categoriesId[6] ] },		// itemsId[14]
	{ name: 'Papa negra', picture: 'images/items/papa-negra.png', color: 'green', categoriesId: [ categoriesId[2], categoriesId[6] ] },								// itemsId[15]
	{ name: 'Papa ojo rosado', picture: 'images/items/papa-ojo-rosado.png', color: 'green', categoriesId: [ categoriesId[2], categoriesId[6] ] },					// itemsId[16]
	{ name: 'Pella de gofio', picture: 'images/items/pella-gofio.png', color: 'green', categoriesId: [ categoriesId[5], categoriesId[6] ] },						// itemsId[17]
	{ name: 'Plátano', picture: 'images/items/platano.png', color: 'lightblue', categoriesId: [ categoriesId[0], categoriesId[5], categoriesId[6] ] },				// itemsId[18]
	{ name: 'Quesadilla del Hierro', picture: 'images/items/quesadilla-hierro.png', color: 'royalblue', categoriesId: [ categoriesId[3], categoriesId[5] ] },		// itemsId[19]
	{ name: 'Sancocho', picture: 'images/items/sancocho.png', color: 'lightblue', categoriesId: [ categoriesId[4], categoriesId[5] ] },								// itemsId[20]
	{ name: 'Suspiros de Moya', picture: 'images/items/suspiros-moya.png', color: 'pink', categoriesId: [ categoriesId[3], categoriesId[5] ] },						// itemsId[21]
	{ name: 'Trucha de batata', picture: 'images/items/trucha-batata.png', color: 'pink', categoriesId: [ categoriesId[3] ] },										// itemsId[22]
	{ name: 'Vieja', picture: 'images/items/vieja.png', color: 'yellow', categoriesId: [ categoriesId[4] ] }														// itemsId[23]
];

// Añadimos el campo special edit al item Pan
_.extend(items[13], { special: {edit: 'mitca studio'} });

var itemsId = [];

// Asignamos un id único a cada item
_.each(items, function (item) {
	var id = _.uniqueId('item_');
	itemsId.push(id);
	_.extend(item, {_id: id});
});

// Añadimos el campo special group a la categoría Made in Canary Island
_.extend(categories[5], { special: {group: [ itemsId[4], itemsId[5], itemsId[7] ]} });

var boxes = [
	{ index: 1, categoryId: '', itemsId: [], groupIds: [] },
	{ index: 2, categoryId: '', itemsId: [], groupIds: [] },
	{ index: 3, categoryId: '', itemsId: [], groupIds: [] },
	{ index: 4, categoryId: '', itemsId: [], groupIds: [] }
];

// Asignamos un id único a cada caja
_.each(boxes, function (box) {
	_.extend(box, {_id: _.uniqueId('box_')});
});
