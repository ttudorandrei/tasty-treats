// this will run when form is submitted
const handleSubmit = async (event) => {
  event.preventDefault();

  // these get the values from the input fields
  const fullName = $("#full-name").val();
  const email = $("#email-address").val();
  const userMessage = $("#user-message").val();
  const newsletterCheck = $("#newsletter-check:checked").val();

  // makes a post request to our api
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

  // if one of the fields is not completed, an error message will be displayed
  if (!fullName || !email || !userMessage) {
    $("#submit-alert").text(
      "Please make sure all fields are filled correctly!"
    );
    return;
  }

  // makes a fetch request to the specified endpoint and based on the response, it either throws an error or redirects to the view-messages page
  const response = await fetch("/api/add-new-message", options);

  if (response.status !== 200) {
    console.info("Form Submission Failed");
  } else {
    window.location.replace("/view-messages");
    console.info("Message submitted successfully!");
  }
};

$("#leave-message-form").submit(handleSubmit);
