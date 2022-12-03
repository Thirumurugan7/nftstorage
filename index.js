import { NFTStorage, File } from "nft.storage";
import { getFilesFromPath } from "files-from-path";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRlMzU1RjhBMjFkRTM5MTFBNjAzNjVkMTIwQTg2Y0IxNENmRkFGQkMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDA2NDE2MzQ3MCwibmFtZSI6InRoaXJ1In0.NNgPh41wZ3k2qv4la1cdSriKtdAeplF_uLMl-jXRa-A";

const client = new NFTStorage({ token });

async function storeImage(filename) {
  const files = await getFilesFromPath(filename);
}
