const { httpPost } = require('./../../utils/httpPost');

describe('httpPost', () => {
  it('should make a http get request and return a promise', () => {
    const testURL = 'www.localhost:3000/form';
    const receivedData = httpPost(testURL);
    expect(typeof (receivedData.then)).toEqual('function');
  });
});
