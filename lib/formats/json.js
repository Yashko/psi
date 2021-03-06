'use strict';
const _ = require('lodash');

module.exports = (overview, statistics, ruleSetResults, opportunities) => {
  const mapSection = section => section.label;
  const zip = (section, labelMapping) => _.zipObject(_.map(section, labelMapping), _.map(section, 'value'));

  overview = zip(overview, 'label');
  statistics = zip(statistics, mapSection);
  ruleSetResults = zip(ruleSetResults, mapSection);
  opportunities = zip(opportunities, mapSection);

  return JSON.stringify({
    overview,
    statistics,
    ruleResults: ruleSetResults,
    opportunities
  }, null, 2);
};
