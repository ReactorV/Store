const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('reject');
        }, 1000)
    }
);

promise
    .then(
        result => alert(`Promise is fulfilled ${result}`),
        result => alert(`Promise is not fulfilled ${result}`)
    );
