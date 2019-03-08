module.exports = [
  {
    name: 'home',
    pattern: '/',
    page: 'index',
  },
  {
    name: 'page',
    pattern: '/page/:alias',
    page: 'page',
  },
  {
    name: 'content-article',
    pattern: '/:prefix(.*)/:type(article)/:id(\\d{8}):suffix(.*)',
    page: 'content/article',
  },
  {
    name: 'content-news',
    pattern: '/:prefix(.*)/:type(news)/:id(\\d{8}):suffix(.*)',
    page: 'content/news',
  },
  {
    name: 'content',
    pattern: '/:prefix(.*):id(\\d{8}):suffix(.*)',
    page: 'content',
  },
  {
    name: 'section-tactical',
    pattern: '/:alias(tactical)',
    page: 'section/tactical',
  },
  {
    name: 'section-training-careers',
    pattern: '/:alias(training-careers)',
    page: 'section/training-careers',
  },
  {
    name: 'section-on-the-street',
    pattern: '/:alias(on-the-street)',
    page: 'section/on-the-street',
  },
  {
    name: 'section-investigations',
    pattern: '/:alias(investigations)',
    page: 'section/investigations',
  },
  {
    name: 'section-command-hq',
    pattern: '/:alias(command-hq)',
    page: 'section/command-hq',
  },
  {
    name: 'section',
    pattern: '/:alias(.*)',
    page: 'section',
  },
];