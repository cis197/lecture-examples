var asyncMap = function(arr, cb) {
    // note our cb is something that all the elems of the arr 
    // will call
    var results = [];
    count = 0;
    for(var i = 0; i < arr.length; i++) {
        job = jobs[i]; // just gets our current job

        // need to wrap in an IIFE bc the value of 'i' is
        // changing quicker than how fast we can process these
        // calls to the `job` functions.
        (function(i) {
            // each of the job functions accepts a callback
            // as an arg. this callback will have an arg passed
            // into it that is handled by our ultimate cb
            job(function(val) {
                results[i] = val;
                count++;
                if (count === arr.length) {
                    cb(results);
                }
            })
        })(i)

    }
}

// calling the function 
//
var job1 = function(cb) {
    setTimeout(function() { cb('first'); }, 900);  
};
var job2 = function(cb) {
    setTimeout(function() { cb('second'); }, 100);
};
var job3 = function(cb) {
    setTimeout(function() { cb('third'); }, 300);
};
var jobs = [job1, job2, job3];
var callback = function(results) { console.log(results); };
asyncMap(jobs, callback);
