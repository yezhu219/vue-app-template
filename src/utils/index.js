export const dateFormat = (fmt, date) => {
  date = new Date(date)
  let ret;
  let opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

export const getParamString = (param) => {
  let strHref = window.location.href;     //获取Url字串     
  let intPos = strHref.indexOf("?");      // 参数开始位置
  let strRight = strHref.substr(intPos + 1);
  let arrTmp = strRight.split("&"); //参数分割符 
  for (let i = 0; i < arrTmp.length; i++) {
    let arrTemp = arrTmp[i].split("=");
    if (arrTemp[0].toUpperCase() == param.toUpperCase()) {
      return arrTemp[1];
    }
  }
  return "";
}

export const getRandomArr = (arr,number) => {
  {
    var temp = [];    //temp存放生成的随机数组
    // var count = arr.length;
    for (let i = 0; i < number; i++) {
      var num = Math.floor(Math.random() * arr.length); //生成随机数num
      temp.push(arr[num]);    //获取arr[num]并放入temp
      arr.splice(num, 1);
    }
    return temp;
  }
}

export const getDevice = () => {
  let u = navigator.userAgent,
    app = navigator.appVersion;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  let isIphoneX = /iPhoneX/.test(u);
  let isWeixin = u.toLowerCase().indexOf('micromessenger') != -1;
  if (isAndroid) {
    return "android";
  } else if (isIphoneX) {
    return "iPhoneX";
  } else if (isiOS) {
    if (screen.height == 812) {
      return "iPhoneX";
    } else {
      return "ios";
    }
  } else {
    return "web";
  }
};

