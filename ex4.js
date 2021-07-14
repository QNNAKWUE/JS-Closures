(function () {
    var p;
    p = 0;
    function bar() {
        p += 1;
    }
    Count.prototype = {
        CountInc: function () {
            return p;
        }
    };
    window.Count = Count;
}());