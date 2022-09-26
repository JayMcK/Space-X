function extractDates(date, type) {
  function findPartOfDate(letter) {
    const index = date.indexOf(letter);
    let section = date[index - 3] + date[index - 2];
    if (date[index - 2] === ".") {
      section = date[index - 4] + date[index - 3];
    }
    section = Number(section);
    return section;
  }

  switch (type) {
    case "days":
      const days = findPartOfDate("d");
      return Number(days) || 0;
    case "hours":
      const hours = findPartOfDate("h");
      return Number(hours) || 0;
    case "minutes":
      const minutes = findPartOfDate("m");
      return Number(minutes) || 0;
    case "seconds":
      const seconds = findPartOfDate(" s");
      return Number(seconds) || 0;
    default:
      break;
  }
}

const splitStringInHalf = (str) => {
  const index = str.length / 2;
  const firstHalf = str.slice(0, index);
  const secondHalf = str.slice(index);

  return (
    <p>
      {firstHalf}
      <br></br>
      {secondHalf}
    </p>
  );
};

export { extractDates, splitStringInHalf };
