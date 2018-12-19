import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x227Eb654674abD6A45769E1b79390fCA61Bb8307'
);

export default instance;
