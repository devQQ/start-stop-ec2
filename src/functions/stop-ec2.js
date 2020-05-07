const { logEvent, stopEC2Instance } = require("../utils/lambda-utils");

module.exports.handler = async (event, context) => {
	logEvent(event);

	return await stopEC2Instance("ec2-instance-id");
};
