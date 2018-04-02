const round = (v) => {
  if (v) {
    return Number((v).toFixed(0));
  }
}

const setProgProp = (v) => {
  if (v) {
    return round(v / 5 * 100);
  }
  return 0;
}

const setCostProgProp = (v, max) => {
  if(v) {
    return round(v / max * 100);
  }
  return 0;
}

const showProps = (v) => {
  return v.join(' ');
}

const getTopProps = (a) => {
  return a.map((v) => v.name).join(", ");
}

const spellReview = (x) => {
  return x > 1 ? 'reviews' : 'review';
}

const getRankingDescription = (ranking, rankingDictionary) => {
  let str = "The score is derived from selected preferences of: "

  ranking.forEach((preference, idx, array) => {
    let nameOfPreference = _.get(rankingDictionary, preference, "");
    let isLastItemOrNotDefined = idx === array.length - 1 || nameOfPreference === "";
    str += isLastItemOrNotDefined ? nameOfPreference + '' : nameOfPreference + ', ';
  });
  return str;
}

module.exports = {
  round: round,
  setProgProp: setProgProp,
  setCostProgProp: setCostProgProp,
  getRankingDescription: getRankingDescription,   
  showProps: showProps,
  getTopProps: getTopProps,
  spellReview: spellReview
}