import RestfulClient from 'react-native-restful-client/index';

export default class EXS_ReserveApi extends RestfulClient {
	
  constructor () {
    super(
      'http://172.17.146.223/traineedrive_F/public/api', {    // The base URL of the API to consume
        resource: 'exs/reserve'           // The resource of the API to consume
    })
  }
}