const { User, conn } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({
      where: {
        [conn.or]: [{ username }, { email }],
      },
    });
    if (existingUser) {
      // Si el usuario ya existe, devuelve un mensaje indicando que el usuario ya existe
      return res.status(400).json({ message: "El usuario ya existe" });
    } else {
      // Si el usuario no existe, crea un nuevo usuario en la base de datos
      const newUser = await User.create({ username, email, password });

      // Devuelve una respuesta con el nuevo usuario creado
      return res.status(201).json({ user: newUser });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
