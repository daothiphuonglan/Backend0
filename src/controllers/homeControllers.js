const connection = require('../config/database')

const getHomepage = (req, res) => {
  return res.render('homepage.ejs')
}

const postCreateUser = async (req, res) => {

    let { email, name, city } = req.body;

    let [results, fields] = await connection.query(
      `INSERT INTO users (email,name,city) VALUES (?,?,?)`,
      [email, name, city]
    );
   console.log('result', results)
    res.send('succeed');
};

const getCreatePage = (req,res) => {
   return res.render('create.ejs')
}

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage
}