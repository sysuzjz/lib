// 检测时间是否在区间内
export const isTimeAvailable = (_startTime, _endTime, timeNow = Date.now()) => {
	// ios识别不了yyyy-mm-dd格式
	let startTime = _startTime && _startTime.replace(/-/g, '/') || '',
		endTime = _endTime && _endTime.replace(/-/g, '/') || '';
	startTime = Date.parse(startTime);
	endTime = Date.parse(endTime);
	return !(timeNow < startTime || timeNow > endTime);
};