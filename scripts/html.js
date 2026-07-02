import path from "node:path";

export function renderHtmlReport({
  errors,
  createdAt,
  totalCheckedFiles,
  totalFilesWithErrors,
  totalErrors,
}) {
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ESLint Report</title>

    <link rel="stylesheet" href="./report.css" />
</head>

<body>

<div class="container">

<h1>ESLint Report</h1>

<p class="date">
Generated: ${createdAt}
</p>

<div class="stats">

    <div class="stat">
        <h2>${totalCheckedFiles}</h2>
        <p>Checked files</p>
    </div>

    <div class="stat">
        <h2>${totalFilesWithErrors}</h2>
        <p>Files with errors</p>
    </div>

    <div class="stat">
        <h2>${totalErrors}</h2>
        <p>Total errors</p>
    </div>

</div>
`;

  if (errors.length === 0) {
    html += `
    <div class="success">
        ✅ No ESLint errors found
    </div>
  `;
  } else {
    for (const file of errors) {
      const relativePath = path.relative(process.cwd(), file.filePath);
      const filename = path.basename(file.filePath);

      html += `
        <div class="card">

            <div class="filename">
                📄 ${filename}
            </div>

            <div class="filepath">
                ${relativePath}
            </div>
    `;

      for (const message of file.messages) {
        html += `
            <div class="error">

                <div class="rule">
                    ${message.ruleId}
                </div>

                <div class="line">
                    Line ${message.line}:${message.column}
                </div>

                <div class="message">
                    ${message.message}
                </div>

            </div>
      `;
      }

      html += `
        </div>
    `;
    }
  }

  html += `
</div>

</body>
</html>
`;

  return html;
}
