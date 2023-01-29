export function base64encoder(src: string) {
  return Buffer.from(src, 'base64').toString();
}
