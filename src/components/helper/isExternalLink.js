export default function isExternalLink(link) {
  return /^http/.test(link);
}
