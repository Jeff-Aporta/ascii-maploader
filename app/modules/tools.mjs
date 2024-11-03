export { forceEnd };

function forceEnd(file, end) {
  if (!end || file.endsWith(end)) {
    return file;
  }
  return `${file}${end}`;
}
