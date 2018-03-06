/**
 * 正则对象的原型上进行扩展方法
 * 测试网址 https://regex101.com/
 */

/**
 * 验证是否为空
 * @param {String} 
 * 不为空 true 为空 false
 */

RegExp.prototype.IsNotEmpty = function(value) {
	if(value != '') return true;
	else return false;
}

/**
 * 验证手机号码
 * @param {Number} 
 * [可匹配"(+86)013325656352"，括号可以省略，+号可以省略，(+86)可以省略，11位手机号前的0可以省略；11位手机号第二位数可以是3、4、5、8中的任意一个]
 */

RegExp.prototype.IsMobilePhoneNumber = function(PhoneNumer) {
	var reg = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/g;
	return reg.test(PhoneNumer);
}

/**
 * 验证电子邮箱
 * @param {String} 
 * [@字符前可以包含字母、数字、下划线和点号；@字符后可以包含字母、数字、下划线和点号；@字符后至少包含一个点号且点号不能是最后一个字符；最后一个点号后只能是字母或数字]  
 */

RegExp.prototype.IsEmail = function(email) {
	// 邮箱名以数字或字母开头；邮箱名可由字母、数字、点号、减号、下划线组成；邮箱名（@前的字符）长度为3～18个字符；邮箱名不能以点号、减号或下划线结尾；不能出现连续两个或两个以上的点号、减号。  
	// var regex = /^[a-zA-Z0-9]((?<!(\.\.|--))[a-zA-Z0-9\._-]){1,16}[a-zA-Z0-9]@([0-9a-zA-Z][0-9a-zA-Z-]{0,62}\.)+([0-9a-zA-Z][0-9a-zA-Z-]{0,62})\.?|((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;  
	var reg = /^([\w-\.]+)@([\w-\.]+)(\.[a-zA-Z0-9]+)$/g;
	return reg.test(email);
}

/**
 * 验证身份证号
 * @param {String} 
 * [可验证一/二代身份证。一代身份证号码为15位的数字；二代身份证号码为18位的数字或17位的数字加字母X]
 */

RegExp.prototype.IsIDCard = function(IDNumber) {
	IDNumber = IDNumber.toUpperCase();
	var reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/ig
	return reg.test(IDNumber);
}

/**
 * 验证日期
 * @param {String} 
 * ["yyyy-mm-dd" 格式的日期校验，已考虑平闰年(不包括时间)]
 */

RegExp.prototype.IsDate = function(date) {
	var reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/g
	return reg.test(date);
}


var str = '姓名: {{user.name.lastname}} 年龄: {{user.age}}';

var reg1 = /\{\{(.*?)\}\}/g; // 匹配花括号及里面内容(非贪婪匹配)

var reg2 = /\{\{(.*)\}\}/g; // 一次匹配所有符合条件的内容包括中间内容(贪婪匹配)

console.log(str.match(reg1)); // ["{{user.name.lastname}}", "{{user.age}}"]

console.log(str.match(reg2)); // ["{{user.name.lastname}} 年龄: {{user.age}}"]

