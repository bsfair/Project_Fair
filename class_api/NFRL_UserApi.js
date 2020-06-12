import RestfulClient from 'react-native-restful-client/index';

export default class NFRL_UserApi extends RestfulClient {
  constructor () {
    super(
 	  'http://172.17.146.223/traineedrive/public/api', {    // The base URL of the API to consume
        resource: 'nfrl2/login'           // The resource of the API to consume
    })
  }
}