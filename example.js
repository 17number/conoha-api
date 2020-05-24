import CoNoHaAPI from "./src/conoha_api";

const username = process.env.CONOHA_USERNAME || "";
const password = process.env.CONOHA_PASSWORD || "";
const region = process.env.CONOHA_REGION || "tyo1";
const tenantId = process.env.CONOHA_TENANT_ID || "";
const api = new CoNoHaAPI(username, password, region, tenantId);

const example = async () => {
  const res = await api.compute.getVersion();
  console.log({res});
}

example();
