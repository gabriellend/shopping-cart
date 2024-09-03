const fs = require('fs');
const path = require('path');

// Function to create an index.ts file with exports for all TypeScript files in a given directory
function createIndexFile(targetDir) {
  const indexPath = path.join(targetDir, 'index.ts');

  // Read all files in the target directory
  const files = fs.readdirSync(targetDir);

  // Filter out the index.ts file and non-TypeScript files
  const tsFiles = files.filter(
    (file) =>
      (file.endsWith('.ts') || file.endsWith('.tsx')) && file !== 'index.ts'
  );

  // Create export statements for each file
  const exportStatements = tsFiles
    .map((file) => {
      const fileNameWithoutExt = path.basename(file, '.ts');
      return `export * from './${fileNameWithoutExt}';`;
    })
    .join('\n');

  // Write the export statements to index.ts
  fs.writeFileSync(indexPath, exportStatements);

  console.log(
    `index.ts file created with exports for: \n${tsFiles.join('\n')}`
  );
}

// Get the target directory from the command line arguments
const targetDir = process.argv[2];

if (!targetDir) {
  console.error('Please specify the target directory as an argument.');
  process.exit(1);
}

// Resolve the target directory path
const resolvedTargetDir = path.resolve(process.cwd(), targetDir);

// Check if the directory exists
if (!fs.existsSync(resolvedTargetDir)) {
  console.error(`Directory not found: ${resolvedTargetDir}`);
  process.exit(1);
}

// Run the function
createIndexFile(resolvedTargetDir);
