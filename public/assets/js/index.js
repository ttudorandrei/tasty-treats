// hiding the second field using jQuery when loading the page
$(document).ready($("#second-honeypot").hide());

// this will run when form is submitted
const handleSubmit = async (event) => {
  event.preventDefault();

  // these get the values from the input fields
  const fullName = $("#full-name").val();
  const email = $("#email-address").val();
  const userMessage = $("#user-message").val();
  const newsletterCheck = $("#newsletter-check:checked").val();
  const firstHiddenField = $("#first-honeypot").val();
  const secondHiddenField = $("#second-honeypot").val();

  //options to make a request to our api
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      fullName,
      email,
      userMessage,
      newsletterCheck,
      date: moment().format("dddd, MMMM Do YYYY"),
    }),
  };

  // if one of the fields is not completed, an error message will be displayed
  if (!fullName || !email || !userMessage) {
    $("#submit-alert").text(
      "Please make sure all fields are filled correctly!"
    );
    return;
  } else if (
    // if at least one of the fields is changed (first one should be empty, second one should have a default value), the user is flagged as a bot and not allowed to continue, error message will be displayed
    firstHiddenField ||
    secondHiddenField !== "no bot at all" ||
    (firstHiddenField && secondHiddenField !== "no bot at all")
  ) {
    $("#submit-alert").text(
      "I`m sorry, this is a 'No bots' environment, you can`t continue!"
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
