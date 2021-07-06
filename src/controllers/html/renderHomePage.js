const renderHomePage = async (req, res) => {
  try {
    return res.render("homepage");
  } catch (error) {}
};

module.exports = { renderHomePage };
