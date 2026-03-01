// https://docs.google.com/spreadsheets/d/e/2PACX-1vS6I1yVkwThxpRAMRBrdvl0Tmz6lBInVB-QzxEl5DsGoqUH-Y7i5nW78UiJWJFHNZPvW5WxWFfY7NtC/pub?gid=0&single=true&output=csv
export const articles = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS6I1yVkwThxpRAMRBrdvl0Tmz6lBInVB-QzxEl5DsGoqUH-Y7i5nW78UiJWJFHNZPvW5WxWFfY7NtC/pub?gid=0&single=true&output=tsv')
  .then(res => res.text())
  .then(csv => {
    const [headerLine, ...lines] = csv.trim().split('\n');
    const headers = headerLine.split('\t');
    return lines.map(line => {
      const values = line.split('\t');
      const obj: Record<string, string> = {};

      // assign from doc
      headers.forEach((header, i) => {
        obj[header.trim()] = values[i]?.trim() || '';
      });

      // if (!obj["image"]) {
      //   obj["image"] = "https://images.unsplash.com/photo-1711284873947-f7c80bf88caf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      // }

      return obj;
    });
  });