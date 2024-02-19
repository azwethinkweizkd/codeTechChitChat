const router = require("express").Router();
const { User } = require("../../models");
// const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
	try {
		// Get all users, sorted by name
		const userData = await User.findAll({
			attributes: { exclude: ["password"] },
			order: [["user_name", "ASC"]],
		});

		// Serialize user data so templates can read it
		const users = userData.map((project) => project.get({ plain: true }));

		res.json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/login", async (req, res) => {
	// console.log(req.body);
	// console.log(req.body.loginEmail);
	try {
		const userLogin = await User.findOne({
			where: { email: req.body.loginEmail },
		});

		// console.log(userLogin);
		if (!userLogin) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" });
			return;
		}

		const validPassword = await userLogin.checkPassword(req.body.loginPW);

		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" });
			return;
		}
		req.session.save(() => {
			req.session.user_id = userLogin.id;
			req.session.logged_in = true;

			res.json({ user: userLogin, message: "You are now logged in!" });
		});
		// console.log(userLogin.id);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
});

router.post("/register", async (req, res) => {
	// console.log(req.body);
	try {
		const newUserData = await User.create(req.body);
		// console.log({ newUserData });
		// console.log(newUserData.id);
		req.session.save(() => {
			req.session.user_id = newUserData.id;
			req.session.logged_in = true;

			res.json({ user: newUserData, message: "You are now logged in!" });
		});
	} catch (e) {
		res.json(401).json(e);
	}
});

router.post("/logout", (req, res) => {
	if (req.session.logged_in === true) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(401).json({ message: "You are not logged in" });
	}
});

module.exports = router;
