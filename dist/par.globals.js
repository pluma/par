/*! par 0.1.3 Copyright (c) 2013 Alan Plum. MIT licensed. @preserve */
(function(root){var require=function(key){return root[key];},module={};
var slice = Array.prototype.slice;
var warn = function(msg) {
    if (console) {
        if (console.warn) {
            console.warn(msg);
        } else if (console.log) {
            console.log('WARNING: ' + msg);
        }
    }
}

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

par.rpartial = rpartial
par.lpartial = par
par.partial = function() {
    warn('par.partial is deprecated!');
    var args = slice.call(arguments, 0);
    return par.apply(this, args);
};

module.exports = par;
root.par = module.exports;}(this));
