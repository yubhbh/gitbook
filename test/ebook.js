var path = require('path');
var _ = require('lodash');
var assert = require('assert');

var fs = require("fs");
var fsUtil = require("../lib/utils/fs");


describe('eBook Generator', function () {
    it('should correctly generate ebook pages', function(done) {
        testGeneration(books[1], "ebook", function(output) {
            assert(fs.existsSync(path.join(output, "SUMMARY.html")));
        }, done);
    });
});