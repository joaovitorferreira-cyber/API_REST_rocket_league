const Carroceria = require('../models/carroceria');
const CarroceriaJson = require('../data/carroceria.json');

exports.getAll = async (req, res) => {
    let response = [];
        for (let i = 0; i < CarroceriaJson.length; i++) {
            let carroceria = new Carroceria(
                CarroceriaJson[i].id,
                CarroceriaJson[i].nombre,
                CarroceriaJson[i].calidad,
                CarroceriaJson[i].hitbox,
                CarroceriaJson[i].lanzamiento
            );
            response.push(carroceria);
        }
    return res.json(response);
}

exports.getById = async (req, res) => {
        const buscaporid = req.params.id;

        for (let i = 0; i < CarroceriaJson.length; i++) {
            let carroceria = new Carroceria(
                CarroceriaJson[i].id,
                CarroceriaJson[i].nombre,
                CarroceriaJson[i].calidad,
                CarroceriaJson[i].hitbox,
                CarroceriaJson[i].lanzamiento
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
            CarroceriaJson[i].id,
            CarroceriaJson[i].nombre,
            CarroceriaJson[i].calidad,
            CarroceriaJson[i].hitbox,
            CarroceriaJson[i].lanzamiento
        );
        if (vienePorQuery && carroceria.hitbox.toLowerCase() == vienePorQuery.toLowerCase()) {
            resultados.push(carroceria);
        }
    }
    return res.json(resultados);
}