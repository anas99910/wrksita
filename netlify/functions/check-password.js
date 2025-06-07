exports.handler = async function(event, context) {
    // The password is securely stored on the server.
    const ADMIN_PASSWORD = "2002"; 

    // Get the password that the user submitted.
    const submittedPassword = JSON.parse(event.body).password;

    // Check if the password is correct.
    if (submittedPassword === ADMIN_PASSWORD) {
        // If correct, send back a success response.
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true })
        };
    } else {
        // If incorrect, send back a failure response.
        return {
            statusCode: 401, // Unauthorized
            body: JSON.stringify({ success: false })
        };
    }
};
