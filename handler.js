'use strict';

const GOOD_RESPONSE = "echo 'Hello world!'"
const EVIL_RESPONSE = "echo 'BWAH HAH HAH HAH!'"

module.exports.badCurl = async (event, context) => {
  
  const ua = event.requestContext.identity.userAgent;
  const responseBody = ua.match(/wget|curl/gi) ? EVIL_RESPONSE : GOOD_RESPONSE;

  return {
    statusCode: 200,
    body: responseBody,
  };
};
