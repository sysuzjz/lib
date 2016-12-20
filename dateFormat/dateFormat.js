var dateFormat = (date, fmt) => {
	if (!(date instanceof Date)) {
		return dateFormat(new Date(date), fmt);
	}
	let result = fmt;
	const o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'H+': date.getHours(),
		'i+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3),
	};
	if (/(y+)/i.test(result)) {
		result = result.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (const key in o) {
		if (new RegExp('(' + key + ')', 'i').test(result)) {
			result = result.replace(RegExp.$1, (RegExp.$1.length === 1)
				? (o[key])
				: (('00' + o[key]).substr(('' + o[key]).length)));
		}
	}
	return result;
};
export default dateFormat;