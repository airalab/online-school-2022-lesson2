import { Robonomics } from "robonomics-interface";
import AccountManager from "robonomics-interface/dist/accountManagerUi";
import keyring from "@polkadot/ui-keyring";
import config from "./config";

const robonomics = new Robonomics({
  endpoint: config.endpoint
});
robonomics.setAccountManager(new AccountManager(keyring));

export default robonomics;
