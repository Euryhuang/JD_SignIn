/**
 * @Author zzr
**/

var url = "http://119.23.212.99/JDsigninMain.js";
var res = http.get(url, {});
var Source = res.body.string("utf-8");
if (Source != "") {
    engines.execScript("JD签到", Source);
} else {
    toast("似乎出了点问题,请联系作者解决");
}
