const AWS = require("aws-sdk");
const { badRequest, success } = require("./response-lib");

function logEvent(event) {
	console.log(JSON.stringify(event));
}

async function startEC2Instance(instanceId) {
	const ec2 = new AWS.EC2();

	var params = {
		InstanceIds: [instanceId],
		DryRun: false,
	};

	try {
		const data = await ec2.startInstances(params).promise();
		return success(data.StartingInstances);
	} catch (e) {
		console.log(e);
		return badRequest({ message: e.message });
	}
}

async function stopEC2Instance(instanceId) {
	const ec2 = new AWS.EC2();

	var params = {
		InstanceIds: [instanceId],
		DryRun: false,
	};

	try {
		const data = await ec2.stopInstances(params).promise();
		return success(data.StoppingInstances);
	} catch (e) {
		console.log(e);
		return badRequest({ message: e.message });
	}
}

module.exports = {
	logEvent,
	startEC2Instance,
	stopEC2Instance,
};
