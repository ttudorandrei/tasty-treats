const renderViewMessagesPage = async (req, res) => {
  try {
    return res.render("view-messages");
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = renderViewMessagesPage;
