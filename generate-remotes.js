function main() {

  const { execSync } = require('child_process');

  const numRemotes = 100;

  console.log(`Generating ${numRemotes} remotes...`)
  for (let i = 2; i <= numRemotes; i++) {
    console.log(`Trying remote ${i}`);
    execSync(`npx nx g @nx/angular:remote remote${i} --host=shell --directory=apps/remotes/remote${i} --projectNameAndRootFormat=as-provided --style=css --e2eTestRunner=none --no-interactive`);
    console.log(`Success!`)
  }

  console.log(`Completed`);
}

main();
