const handleSubmit = async (event) => {
  event.preventDefault();
  const fullName = $("#full-name").val();
  const email = $("#email-address").val();
  const userMessage = $("#user-message").val();
  const newsletterCheck = $("#newsletter-check").val();

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      fullName,
      email,
      userMessage,
      newsletterCheck,
      date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    }),
  };

  if (!fullName || !email || !userMessage || !newsletterCheck) {
    $("#submit-alert").text(
      "Please make sure all fields are filled correctly!"
    );
    return;
  }
  const response = await fetch("/api/add-new-message", options);

  if (response.status !== 200) {
    console.info("Form Submission Failed");
  } else {
    window.location.replace("/view-messages");
    console.info("Message submitted successfully!");
  }
};

$("#leave-message-form").submit(handleSubmit);
