function status(request, response) {
  response.status(200).json({
    status: "ok",
    message: "API is running smoothly",
    timestamp: new Date().toISOString(),
  });
}

export default status;
