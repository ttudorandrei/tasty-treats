const handleSubmit = async (event) => {
  event.preventDefault();
  const fullName = $("#full-name").val();
  const email = $("#email-address").val();
  const userMessage = $("#user-message").val();
  const newsletterCheck = $("#newsletter-check").val();

  console.log(fullName, email, userMessage, newsletterCheck);
};

$("#leave-message-form").submit(handleSubmit);
