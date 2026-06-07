const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  projectRoot,
  indexHtmlPath: path.join(projectRoot, 'index.html'),
  heroVideoAriaLabel: 'Watch 2-minute intro',
  introVideoUrl: 'https://drive.google.com/file/d/1OI1eU8K2CWpuZAVJ9ydqSrNtVD90ZgR5/view?usp=sharing',
  siteDescription:
    'Rob Voto - Technical Business Analyst in Sydney, building AI tools and translating complex business, data, integration and workflow problems into buildable solutions.',
  siteTitle: 'Rob Voto | Technical Business Analyst + AI',
};
