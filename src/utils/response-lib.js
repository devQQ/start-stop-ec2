function buildResponse(statusCode, body) {
	return {
		statusCode: statusCode,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		},
		body: JSON.stringify(body),
	};
}

function success(body) {
	return buildResponse(200, body);
}

function badRequest(body) {
	return buildResponse(400, body);
}

module.exports = {
	badRequest,
	success,
};
