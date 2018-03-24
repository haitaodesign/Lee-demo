const _ = require('lodash')

function customizer(objValue, srcValue) {
    return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

var obj = defaults({
    b: 3
}, {
    b: 2
});
// console.log(obj)

var b = _.assignInWith({
    a: 1
}, {
    b: 2
}, function (objValue, srcValue) {
    return _.isUndefined(objValue) ? srcValue : objValue;
})