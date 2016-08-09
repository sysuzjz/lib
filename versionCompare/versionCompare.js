var compareVersion = (currentVersion, targetVersion) => {
	const versionExp = new RegExp(/^\d+\.\d+\.\d+$/);
	if (!versionExp.test(currentVersion) || !versionExp.test(targetVersion)) {
		return false;
	}
	const currentVersionArr = currentVersion.split('.'),
		targetVersionArr = targetVersion.split('.');
	for (let i = 0; i < 3; i++) {
		if (parseInt(currentVersionArr[i], 10) < parseInt(targetVersionArr[i], 10)) {
			return -1;
		}
		if (parseInt(currentVersionArr[i], 10) > parseInt(targetVersionArr[i], 10)) {
			return 1;
		}
	}
	return 0;
};
module.exports = compareVersion;