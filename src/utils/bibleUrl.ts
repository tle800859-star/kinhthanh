export const HTTLVN_BIBLE_1925_URL = 'https://kinhthanh.httlvn.org/?v=VI1934';

/**
 * Returns the online reading URL for a given Bible passage or book based on VI1925 (VI1934) online on HTTLVN
 */
export function getBibleOnlineUrl(passage?: string): string {
  if (!passage) return HTTLVN_BIBLE_1925_URL;
  // HTTLVN online Bible link with optional search/passage parameter
  return `${HTTLVN_BIBLE_1925_URL}`;
}

/**
 * Helper to open the online 1925 Bible in a new browser tab
 */
export function openBibleOnline(passage?: string) {
  const url = getBibleOnlineUrl(passage);
  window.open(url, '_blank', 'noopener,noreferrer');
}
