const tool = {}

// localStorage
tool.data = {
    set(table, settings) {
        const _set = JSON.stringify(settings)
        return localStorage.setItem(table, _set)
    },
    get(table) {
        let data = localStorage.getItem(table)
        try {
            data = JSON.parse(data)
        } catch (err) {
            return null
        }
        return data
    },
    remove(table) {
        return localStorage.removeItem(table)
    },

    clear() {
        return localStorage.clear()
    }
}

// sessionStorage
tool.session = {
    set(table, settings) {
        const _set = JSON.stringify(settings)
        return sessionStorage.setItem(table, _set)
    },
    get(table) {
        let data = sessionStorage.getItem(table)
        try {
            data = JSON.parse(data)
        } catch (err) {
            return null
        }
        return data
    },
    remove(table) {
        return sessionStorage.removeItem(table)
    },
    clear() {
        return sessionStorage.clear()
    }
}

// 生成UUID
tool.vaUuid = () => {
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
    // 首字符转换成字母
    return 'va' + uuid.slice(2)
}

tool.getTime = (format = 'YYYY-MM-DD') => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以+1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // 定义替换规则
  const formatMap = {
    'YYYY-MM-DD HH:mm:ss': `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
    'YYYY-MM-DD HH:mm': `${year}-${month}-${day} ${hours}:${minutes}`,
    'YYYY-MM-DD': `${year}-${month}-${day}`,
    'YYYY-MM': `${year}-${month}`,
    'YYYY': `${year}`,
    'MM-DD': `${month}-${day}`,
    'MM': `${month}`,
    'DD': `${day}`,
    'HH:mm:ss': `${hours}:${minutes}:${seconds}`,
    'HH:mm': `${hours}:${minutes}`,
    'YYYY年MM月DD日': `${year}年${month}月${day}日`,
    'YYYY年MM月': `${year}年${month}月`,
    // 可继续扩展...
  };

  // 优先精确匹配
  if (formatMap[format]) {
    return formatMap[format];
  }

  // 如果没有精确匹配，尝试简单替换（更灵活，但建议优先用上面方式）
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

export default tool
