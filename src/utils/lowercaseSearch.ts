export default function lowercaseSearch(el: string, vol: string) {
  return el.toLocaleLowerCase().indexOf(vol.toLocaleLowerCase()) !== -1;
}
