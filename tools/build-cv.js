/**
 * Builds the .docx CV from the shared data module.
 *
 * Constraints that drive every choice: single column, no tables used for
 * layout, no text boxes, no graphics, nothing in headers or footers, standard
 * font, conventional section names. Applicant tracking systems parse text in
 * reading order, so anything visually clever gets shredded on the way in.
 */

const {
  Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
  convertInchesToTwip, ExternalHyperlink,
} = require("docx");
const fs = require("fs");
const cv = require("./cv-data.js");

const FONT = "Calibri";
const INK = "1A1A1A";
const SOFT = "444444";
const rule = { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 2 } };

const line = (text, o = {}) => new Paragraph({
  alignment: o.align || AlignmentType.LEFT,
  spacing: { before: o.before ?? 0, after: o.after ?? 60 },
  children: [new TextRun({
    text, font: FONT, size: o.size ?? 21, bold: !!o.bold,
    color: o.color || INK, characterSpacing: o.track ?? 0,
  })],
});

const section = (title) => new Paragraph({
  border: rule,
  spacing: { before: 240, after: 120 },
  children: [new TextRun({
    text: title, font: FONT, size: 21, bold: true, color: INK,
    allCaps: true, characterSpacing: 16,
  })],
});

const role = (title, org, dates) => [
  new Paragraph({
    spacing: { before: 140, after: 0 },
    children: [
      new TextRun({ text: title, font: FONT, size: 22, bold: true, color: INK }),
      new TextRun({ text: `  |  ${org}`, font: FONT, size: 21, color: INK }),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 60 },
    children: [new TextRun({ text: dates, font: FONT, size: 20, color: SOFT, italics: true })],
  }),
];

const bullet = (text) => new Paragraph({
  bullet: { level: 0 },
  spacing: { before: 0, after: 60 },
  children: [new TextRun({ text, font: FONT, size: 21, color: INK })],
});

const skill = ([label, items]) => new Paragraph({
  spacing: { before: 0, after: 70 },
  children: [
    new TextRun({ text: `${label}: `, font: FONT, size: 21, bold: true, color: INK }),
    new TextRun({ text: items, font: FONT, size: 21, color: INK }),
  ],
});

const project = ([name, url, desc]) => new Paragraph({
  spacing: { before: 0, after: 80 },
  children: [
    new TextRun({ text: `${name} `, font: FONT, size: 21, bold: true, color: INK }),
    new ExternalHyperlink({
      link: `https://${url}`,
      children: [new TextRun({ text: url, font: FONT, size: 20, color: "1F5C8B", underline: {} })],
    }),
    new TextRun({ text: ` – ${desc}`, font: FONT, size: 21, color: INK }),
  ],
});

const internal = ([name, desc]) => new Paragraph({
  spacing: { before: 0, after: 80 },
  children: [
    new TextRun({ text: `${name} `, font: FONT, size: 21, bold: true, color: INK }),
    new TextRun({ text: `– ${desc}`, font: FONT, size: 21, color: INK }),
  ],
});

const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 21, color: INK } } } },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },   // US Letter
        margin: {
          top: convertInchesToTwip(0.6), bottom: convertInchesToTwip(0.6),
          left: convertInchesToTwip(0.7), right: convertInchesToTwip(0.7),
        },
      },
    },
    children: [
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({
          text: cv.name.toUpperCase(), font: FONT, size: 40, bold: true,
          color: INK, characterSpacing: 20,
        })],
      }),
      line(cv.title, { size: 22, color: SOFT, after: 80 }),
      line(cv.location, { size: 20, color: SOFT, after: 40 }),
      line(cv.contact, { size: 20, after: 40 }),
      line(cv.links, { size: 20, after: 0 }),

      section("Professional Summary"),
      line(cv.summary, { after: 40 }),

      section("Core Skills"),
      ...cv.skills.map(skill),

      section("Professional Experience"),
      ...cv.experience.flatMap((r) => [...role(r.title, r.org, r.dates), ...r.bullets.map(bullet)]),

      section("Selected Projects (all publicly live)"),
      ...cv.projects.map(project),
      ...cv.internal.map(internal),

      section("Education"),
      ...cv.education.flatMap(([d, s, y]) => role(d, s, y)),

      section("Certifications and Languages"),
      line(cv.certifications, { after: 60 }),
      line(cv.languages, { after: 0 }),
    ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("Frederick-Akam-CV.docx", buf);
  console.log(`wrote Frederick-Akam-CV.docx (${Math.round(buf.length / 1024)} KB)`);
});
