import { execSync } from "node:child_process";
import path from "node:path";

function run(command, title) {
  console.log(`\n📦 ${title}`);
  console.log(`$ ${command}\n`);

  try {
    execSync(command, {
      stdio: "inherit",
    });

    console.log(`✅ ${title} completed`);
    return true;
  } catch (error) {
    console.log(`❌ ${title} failed`);
    return false;
  }
}

console.log("\n🚀 Starting project check...\n");

// 1. ESLint JSON
run("npm run lint:json", "Generating ESLint JSON");

// 2. HTML Report
run("npm run report", "Generating HTML Report");

// 3. TypeScript
run("npm run typecheck", "TypeScript Check");

console.log("\n🎉 Project check finished!\n");

// Open the HTML report in the default browser

const reportPath = path.resolve("reports/report.html");

execSync(`start "" "${reportPath}"`, {
  shell: true,
});
