import { ANT, ArweaveSigner } from "@ar.io/sdk";
import Irys from "@irys/sdk";

import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

import "dotenv/config";

const DEPLOY_FOLDER = "./dist";
const DEPLOY_KEY = process.env.DEPLOY_KEY;
const ANT_PROCESS = process.env.ANT_PROCESS;
const DEPLOY_WALLET = process.env.DEPLOY_WALLET;

async function getFolderSize(folderPath) {
  let totalSize = 0;

  async function calculateSize(dirPath) {
    const entries = await readdir(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      if (entry.isDirectory()) {
        await calculateSize(fullPath);
      } else {
        const stats = await stat(fullPath);
        totalSize += stats.size;
      }
    }
  }

  await calculateSize(folderPath);
  return totalSize;
}

async function deploy() {
  if (!DEPLOY_KEY) throw new Error("DEPLOY_KEY not configured");
  if (!ANT_PROCESS) throw new Error("ANT_PROCESS not configured");
  if (!DEPLOY_WALLET) throw new Error("DEPLOY_WALLET not configured");

  try {
   const jwk = JSON.parse(Buffer.from(DEPLOY_KEY, "base64").toString("utf-8"));

    const irys = new Irys({
      network: "mainnet",
      url: "https://turbo.ardrive.io",
      token: "arweave",
      key: jwk,
    });
    irys.uploader.useChunking = false;

    const balance = await irys.getBalance(DEPLOY_WALLET);
    console.log(
      "📜 LOG > node balance:",
      irys.utils.fromAtomic(balance),
      irys.token
    );

    const folderSize = await getFolderSize(DEPLOY_FOLDER);
    console.log("📜 LOG > folderSize:", folderSize, "bytes");

    const price = await irys.getPrice(folderSize);
    console.log(
      "📜 LOG > total cost:",
      irys.utils.fromAtomic(price),
      irys.token
    );

    if (irys.utils.fromAtomic(balance).lt(irys.utils.fromAtomic(price))) {
      throw new Error("Insufficient balance");
    }

    console.log(`Deploying ${DEPLOY_FOLDER} folder`);

    const txResult = await irys.uploadFolder(DEPLOY_FOLDER, {
      indexFile: "index.html",
      interactivePreflight: false,
      logFunction: (log) => console.log(log),
      keepDeleted: false, // Whether to keep now deleted items from previous uploads
    });

    console.log("📜 LOG > txResult:", txResult);

    await new Promise((r) => setTimeout(r, 1000));

    const ant = ANT.init({
      signer: new ArweaveSigner(jwk),
      processId: ANT_PROCESS,
    });

    const info = await ant.getInfo();

    console.log("📜 LOG > ANT INFO:", info);

    const { id: txId } = await ant.setRecord(
      {
        transactionId: txResult.id,
        ttlSeconds: 900,
      },
      // optional additional tags
      {
        tags: [
          {
            name: "Powered-By",
            value: "AO Starter Kit",
          },
          {
            name: "GIT-HASH",
            value: process.env.GITHUB_SHA,
          },
        ],
      }
    );

    console.log(`📜 LOG > Deployed TxId ${txId}`);
  } catch (error) {
    console.error(error);
  }
}

deploy().then().catch(console.error);
