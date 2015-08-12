


function useCallback(x, onSuccessCallback, onFailureCallback) {
    console.log('hello');
    if (x === 5) {
        onSuccessCallback(x);
    } else {
        onFailureCallback();
    }
}

function onSuccessCallback(number) {
    console.log('The number you passed in is ' + number);
}

function onFailureCallback() {
    console.log('There was an error');

}

useCallback(5, onSuccessCallback, onFailureCallback);
