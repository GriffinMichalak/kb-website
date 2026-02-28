// https://docs.google.com/spreadsheets/d/e/2PACX-1vS6I1yVkwThxpRAMRBrdvl0Tmz6lBInVB-QzxEl5DsGoqUH-Y7i5nW78UiJWJFHNZPvW5WxWFfY7NtC/pub?gid=0&single=true&output=csv
export const articles = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS6I1yVkwThxpRAMRBrdvl0Tmz6lBInVB-QzxEl5DsGoqUH-Y7i5nW78UiJWJFHNZPvW5WxWFfY7NtC/pub?gid=0&single=true&output=tsv')
  .then(res => res.text())
  .then(csv => {
    const [headerLine, ...lines] = csv.trim().split('\n');
    const headers = headerLine.split('\t');
    return lines.map(line => {
      const values = line.split('\t');
      const obj: Record<string, string> = {};
      headers.forEach((header, i) => {
        obj[header.trim()] = values[i]?.trim() || '';
      });
      return obj;
    });
  });

// export const articles = [
//   // DORCHESTER REPORTER
//     {
//       image: 'http://www.dotnews.com/wp-content/uploads/2026/02/IMG_1984-scaled.jpg',
//       link: 'https://www.dotnews.com/2026/02/25/the-good-the-bad-and-the-ugly-of-bostons-snow-removal/',
//       publication: 'Dorchester Reporter',
//       date: '02/25/2026',
//       headline:
//         'The good, the bad and the ugly of Boston’s snow removal',
//       excerpt:
//         'As Bostonians continue to dig-out from this week’s blizzard, the city’s 14 snow farms— including three in Dorchester— continue to grow…',
//     },
//     {
//       image: 'http://www.dotnews.com/wp-content/uploads/2026/02/IMG_1828-scaled.jpg',
//       link: 'https://www.dotnews.com/2026/02/25/first-parish-dorchester-vigil-for-minneapolis-victims-just-a-beginning-congregants-hope/',
//       publication: 'Dorchester Reporter',
//       date: '02/25/2026',
//       headline:
//         'First Parish Dorchester vigil for Minneapolis victims ‘just a beginning,’ congregants hope',
//       excerpt:
//         'First Parish Dorchester held a vigil last Thursday (Feb. 19) in a show of solidarity with the people of Minneapolis/St. Paul…',
//     },
//     {
//       image: 'http://www.dotnews.com/wp-content/uploads/2026/02/Screen-Shot-2026-02-17-at-8.55.40-AM.png',
//       link: 'https://www.dotnews.com/2026/02/18/burst-pipe-in-umass-boston-dorm-leaves-600-plus-students-searching-for-refuge/',
//       publication: 'Dorchester Reporter',
//       date: '02/18/2028',
//       headline:
//         'Burst pipe in UMass Boston dorm leaves 600-plus students searching for refuge',
//       excerpt:
//         'Hundreds of UMass Boston students on were displaced after a 10th-floor pipe burst in the East Residence Hall on Monday, Feb. 9…',
//     },
//     {
//       image: 'https://www.dotnews.com/wp-content/uploads/2026/01/DSC_0047-scaled.jpg',
//       link: 'https://www.dotnews.com/2026/01/29/a-new-home-for-haitian-dance-and-folklore-opens-in-roxburys-nubian-square/',
//       publication: 'Dorchester Reporter',
//       date: '02/18/2028',
//       headline:
//         'A new home for Haitian dance and folklore opens in Roxbury’s Nubian Square',
//       excerpt:
//         'Jean Appolon Expressions, the Haitian folkloric and contemporary dance organization, celebrated the grand opening of its new dance center in Roxbury’s Nubian Square on Tuesday, Jan. 27…',
//     },
//     // BOSTON GLOBE
//     {
//       image: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/FFEYS22H2BAQDIHVOU6MHKBEFE.jpg?auth=961b3a9e955ce3e57a7d31c2f14f047d2077bfd16ce8f1677f4c8829fb8e12dc&width=1440',
//       link: 'https://www.bostonglobe.com/2025/12/19/magazine/family-heirloom-ring-cape-cod/?p1=StaffPage',
//       publication: 'Boston Globe Mag',
//       date: '12/19/2025',
//       headline:
//         'I never met my grandmother Betsy but her memory encircles me every day',
//       excerpt:
//         'We never crossed paths in person, but my footsteps have overlapped my grandmother’s at home and probably around our Cape Cod hometown.',
//     },
//     {
//       image: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/XUMYZMH73QI6BISR5FF6L5DCZM.jpg?auth=6984c2905ba015bee2dd6aabab3de17148703535abee49d367baba52787a4eaa&width=1440',
//       link: 'https://www.bostonglobe.com/2025/08/19/lifestyle/bartista-frustrations-drinks/?p1=StaffPage',
//       publication: 'Boston Globe Mag',
//       date: '08/19/2025',
//       headline:
//         'Baristas may not love your sugary drinks, but they’re happy you’re happy',
//       excerpt:
//         'We asked them to spill the tea on some of their biggest customer frustrations. Here’s what they said.',
//     },
//   ]