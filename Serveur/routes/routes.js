const express = require("express")
const router = express.Router()
const Regle = require("./../models/Regles");

router.get("/regles", async (req, res) => {
	const regles = await Regle.find()
	res.send(regles);
})

router.get("/regles/:id", async (req, res) => {
	const regle = await Regle.findOne({ _id: req.params.id })
	res.send(regle)
})

router.post("/regles", async (req, res) => {
	const regle = new Regle({
		titre: req.body.titre,
        contenu: req.body.contenu,
        img: req.body.img,
        texte:req.body.texte,
        video:req.body.video
	})
	await regle.save()
	res.send(regle)
})

router.patch("/regles/:id", async (req, res) => {
	try {
		const regle = await Regle.findOne({ _id: req.params.id })

		if (req.body.titre) {
			regle.titre = req.body.titre
		}

		if (req.body.contenu) {
			regle.contenu = req.body.contenu
        }
        if (req.body.img) {
			regle.img = req.body.img
        }
        if (req.body.texte) {
			regle.texte = req.body.texte
		}
        if (req.body.video) {
			regle.video = req.body.video
		}
		await regle.save()
		res.send(regle)
	} catch {
		res.status(404)
		res.send({ error: "Regle doesn't exist!" })
	}
})

router.delete("/regles/:id", async (req, res) => {
	try {
		await Regle.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Regle doesn't exist!" })
	}
})








module.exports = router