// function to render the homepage
const renderHomePage = async (req, res) => {
  try {
    return res.render("homepage");
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = renderHomePage;
