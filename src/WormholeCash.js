let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
import Configuration from './Configuration';
import DataRetrieval from './DataRetrieval';

class WormholeCash {
  constructor(config) {
    if(config && config.restURL && config.restURL !== '') {
      this.restURL = config.restURL;
    } else {
      this.restURL = 'https://wormholerest.bitcoin.com/v1/';
    }

    this.Configuration = new Configuration(this.restURL);
    this.Configuration = new DataRetrieval(this.restURL);

    this.BITBOX = new BITBOXCli();
  }
}

export default WormholeCash;
