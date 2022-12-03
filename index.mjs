import { NFTStorage, File } from "nft.storage";
import * as fs from "fs/promises";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRlMzU1RjhBMjFkRTM5MTFBNjAzNjVkMTIwQTg2Y0IxNENmRkFGQkMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDA2NDE2MzQ3MCwibmFtZSI6InRoaXJ1In0.NNgPh41wZ3k2qv4la1cdSriKtdAeplF_uLMl-jXRa-A";

const client = new NFTStorage({ token });

async function storeImage(filename) {
  const content = await fs.readFile(filename);

  const f = new File([content], filename, { type: "image/jpeg" });

  const cid = await client.storeBlob(f);
  console.log(cid);
}
async function main() {
  const filename = process.argv[2];
  console.log("storing", filename);
  await storeImage(filename);
}
main();
