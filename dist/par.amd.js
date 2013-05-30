/*! par 0.2.0 Copyright (c) 2013 Alan Plum. MIT licensed. @preserve */
define(function(require, exports, module) {
var slice = Array.prototype.slice;

function par(fn) {
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

par.rpartial = rpartial;
par.lpartial = par;

module.exports = par;
return module.exports;});
