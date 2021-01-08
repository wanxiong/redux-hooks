function padLeftZero(str) {
  return (`00${str}`).substr(str.length);
}

export function formatDate(time, fmt) {
  const date = new Date(time);
  let newFmt = fmt;
  if (/(y+)/.test(fmt)) {
    newFmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = `${o[k]}`;
      newFmt = newFmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return newFmt;
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}
