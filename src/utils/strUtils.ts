function CSStingToArray(str: string): Array<string> {
  let arr: Array<string> = [];
  arr = str.split(",").map((each) => each.trim());
  return arr.filter((each) => each.length != 0);
}
function ArrayToCSString(arr: Array<string>): string {
  let str: string = "";
  if (arr.length != 0) str = arr[0];
  for (let i = 1; i < arr.length; i++) {
    str = `${str}, ${arr[i]}`;
  }
  return str;
}

function ExtractParagraphs(htmlString: string): string[] {
  const regex = /<p>(.*?)<\/p>/g;
  const matches = [];
  let match;

  while ((match = regex.exec(htmlString)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}

export { CSStingToArray, ArrayToCSString, ExtractParagraphs };
