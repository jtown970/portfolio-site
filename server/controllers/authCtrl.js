module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {full_name, email} = req.body

    const existingUser = await db.check_user(email)
    if (existingUser[0]) {
      return res.status(409).send("user already exists")
    }

    // try{
      const [newUser] = await db.register_user([full_name, email])
      req.session.user = [newUser]
      res.status(200).send(req.session.user)
      // main(email, full_name)
    // } catch (err){
    //   res.status(500).send('could not login', err)
    // }
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const {email} = req.body

    const existingUser = await db.check_user(email)

    if (!existingUser[0]) {
      return res.status(404).send("user does not exist")
    }

    req.session.user = existingUser[0]
    res.status(200).send(req.session.user)

  },
  updateInfo: async (req, res) => {},
  logout: async (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  getUser: async (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.sendStatus(404)
    }
  },
}