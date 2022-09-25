function extractDates(date, type) {
  function findPartOfDate(letter, section) {
    const index = date.indexOf(letter);

    section = date[index - 3].toString() + date[index - 2].toString();
    if (date[index - 2] === ".") {
      section = date[index - 4].toString() + date[index - 3].toString();
    }
    return section;
  }

  switch (type) {
    case "days":
      return findPartOfDate("d");
    case "hours":
      return findPartOfDate("h");
    case "minutes":
      return findPartOfDate("m");
    case "seconds":
      return findPartOfDate(" s");
    default:
      break;
  }
}

export { extractDates };
