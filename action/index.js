/**
 * [description]
 *
 * @author helinjiang
 * @date 2015/12/20
 */

console.log('hello');
var nodeWizMd = require('node-wiz-md');

var infoArr = [];
nodeWizMd('./action/JavaScript/', './action/wizmd/', function (content) {
  // 获得文章的信息
  var tInfoObj = {},
    tInfoArr = content.split('-->')[0].replace('<!--', '').split('\r\n');

  tInfoArr.forEach(function (item) {
    if (!item) {
      // 注意有可能有空元素，要过滤之
      return;
    }
    var arr = item.split(":");
    tInfoObj[arr[0].trim()] = arr[1].trim();
  });
  //console.log(tInfoObj);
  infoArr.push(tInfoObj);

  return content;
}, function () {
  console.log(infoArr);
});

