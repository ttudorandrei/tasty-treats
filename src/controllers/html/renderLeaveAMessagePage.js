const renderLeaveAMessagePage = async (req, res) => {
  try {
    return res.render("leave-a-message");
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = renderLeaveAMessagePage;
