const express = require("express")
const router = express.Router()
const Pbcartes = require("./../models/Pbcartes");

router.get("/Pbcarte", async (req, res) => {
	const pbcarte = await Pbcartes.find()
	res.send(pbcarte);
})

router.get("/Pbcarte/:id", async (req, res) => {
	const pbcarte= await Pbcartes.findOne({ _id: req.params.id })
	res.send(pbcarte)
})

router.post("/Pbcarte", async (req, res) => {
	const pbcarte = new Pbcartes({
		titre: req.body.titre,
        contenu: req.body.contenu
	})
	await pbcarte.save()
	res.send(Pbcarte)
})

router.patch("/Pbcarte/:id", async (req, res) => {
	try {
		const pbcarte = await Pbcartes.findOne({ _id: req.params.id })

		if (req.body.titre) {
			pbcarte.titre = req.body.titre
		}

		if (req.body.contenu) {
			pbcarte.contenu = req.body.contenu
        }
      
		await pbcarte.save()
		res.send(pbcarte)
	} catch {
		res.status(404)
		res.send({ error: "Pbcarte doesn't exist!" })
	}
})

router.delete("/Pbcarte/:id", async (req, res) => {
	try {
		await Pbcartes.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Regle doesn't exist!" })
	}
})








module.exports = router