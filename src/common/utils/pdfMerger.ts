import { PDFDocument } from 'pdf-lib';

export async function pdfMerger(buffers: Buffer[]): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();

  for (const buffer of buffers) {
    pdfDoc.addPage(
      ...(await pdfDoc.copyPages(await PDFDocument.load(buffer), [0])),
    );
  }
  return Buffer.from((await pdfDoc.save()).buffer);
}
