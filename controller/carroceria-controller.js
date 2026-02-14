const Carroceria = require('../models/carroceria');
const CarroceriaJson = require('../data/carroceria.json');

exports.getAll = async (req, res) => {
    let response = [];
        for (let i = 0; i < CarroceriaJson.length; i++) {
            let carroceria = new Carroceria(
                carroceriaJson[i].id,
                carroceriaJson[i].nombre,
                carroceriaJson[i].calidad,
                carroceriaJson[i].hitbox,
                carroceriaJson[i].lanzamiento
            );
            response.push(carroceria);
        }
    return res.json(response);
}

exports.getById = async (req, res) => {
        const buscaporid = req.params.id;

        for (let i = 0; i < CarroceriaJson.length; i++) {
            let carroceria = new Carroceria(
                carroceriaJson[i].id,
                carroceriaJson[i].nombre,
                carroceriaJson[i].calidad,
                carroceriaJson[i].hitbox,
                carroceriaJson[i].lanzamiento
            );
            if (carroceria.id == buscaporid) {
                return res.json(carroceria);
            }
        }
        return res.status(404).json({ error: "Carrocería not found" });
}

exports.getByHitbox = async (req, res) => {
    const vienePorQuery = req.query.hitbox;
    let resultados = [];
    for (let i = 0; i < CarroceriaJson.length; i++) {

        let carroceria = new Carroceria(
            carroceriaJson[i].id,
            carroceriaJson[i].nombre,
            carroceriaJson[i].calidad,
            carroceriaJson[i].hitbox,
            carroceriaJson[i].lanzamiento
        );
        if (vienePorQuery && carroceria.hitbox.toLowerCase() == vienePorQuery.toLowerCase()) {
            resultados.push(carroceria);
        }
    }
    return res.json(resultados);
}