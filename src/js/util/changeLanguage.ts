export function changeLanguage(this: string, [PL, GER]: [string, string]): string {
  return this === 'PL' ? PL : GER;
}
