var slice = Array.prototype.slice;

function lpartial(fn) {
    var args0 = slice.call(arguments, 1);
    return function() {
        var argsN = slice.call(arguments, 0),
            args = [];
        args.push.apply(args, args0);
        args.push.apply(args, argsN);
        return fn.apply(this, args);
    };
}

function rpartial(fn) {
    var argsN = slice.call(arguments, 1);
    return function() {
        var args = slice.call(arguments, 0);
        args.push.apply(args, argsN);
        return fn.apply(this, args);
    };
}

var exports = module.exports = lpartial;
exports.rpartial = rpartial;
exports.partial = lpartial;

// legacy API for back compat
exports.lpartial = lpartial;
