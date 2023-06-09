function requestValidator(httpObj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validURI = /[^A-Za-z0-9\.\*]+/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validMessage = /[<>\\&'"]/g;

    if (!httpObj.hasOwnProperty('method') || !validMethods.includes(httpObj['method']) || !httpObj['method']) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!httpObj.hasOwnProperty('uri') || validURI.test(httpObj['uri']) || !httpObj['uri']) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!httpObj.hasOwnProperty('version') || !validVersions.includes(httpObj['version']) || !httpObj['version']) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!httpObj.hasOwnProperty('message') || validMessage.test(httpObj['message'])) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return httpObj;
}
const res = requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});
console.log(res);