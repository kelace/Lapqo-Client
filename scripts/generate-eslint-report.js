import fs from "node:fs";
import path from "node:path";
import { renderHtmlReport } from "./html.js";

console.log("🚀 Report script started");

const reportPath = path.resolve("reports/eslint.json");
const outputPath = path.resolve("reports/report.html");

// Читаємо JSON-звіт ESLint
const raw = fs.readFileSync(reportPath, "utf8");
const report = JSON.parse(raw);

// Залишаємо тільки файли з помилками
const errors = report.filter((file) => file.messages.length > 0);

// Статистика
const totalCheckedFiles = report.length;
const totalFilesWithErrors = errors.length;
const totalErrors = errors.reduce((sum, file) => sum + file.messages.length, 0);

const createdAt = new Date().toLocaleString();

const html = renderHtmlReport({
  report,
  errors,
  createdAt,
  totalCheckedFiles,
  totalFilesWithErrors,
  totalErrors,
});

fs.writeFileSync(outputPath, html);

console.log("✅ HTML report generated!");
