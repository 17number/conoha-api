import CoNoHaAccountAPI from "./conoha_account_api";
import CoNoHaComputeAPI from "./conoha_compute_api";
import CoNoHaBlockStorageAPI from "./conoha_block_storage_api";
import CoNoHaImageAPI from "./conoha_image_api";
import CoNoHaDatabsaeAPI from "./conoha_databsae_api";
import CoNoHaNetworkAPI from "./conoha_network_api";
import CoNoHaObjectStorageAPI from "./conoha_object_storage_api";
import CoNoHaDnsAPI from "./conoha_dns_api";
import CoNoHaMailAPI from "./conoha_mail_api";

export default class CoNoHaAPI {
  constructor(username = "", password = "", region = "tyo1", tenant_id = "") {
    this.account = new CoNoHaAccountAPI(username, password, region, tenant_id);
    this.compute = new CoNoHaComputeAPI(username, password, region, tenant_id);
    this.blockStorage = new CoNoHaBlockStorageAPI(username, password, region, tenant_id);
    this.image = new CoNoHaImageAPI(username, password, region, tenant_id);
    this.databsae = new CoNoHaDatabsaeAPI(username, password, region, tenant_id);
    this.network = new CoNoHaNetworkAPI(username, password, region, tenant_id);
    this.objectStorage = new CoNoHaObjectStorageAPI(username, password, region, tenant_id);
    this.dns = new CoNoHaDnsAPI(username, password, region, tenant_id);
    this.mail = new CoNoHaMailAPI(username, password, region, tenant_id);
  }
}
