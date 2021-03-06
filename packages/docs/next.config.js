const pkg = require('./package.json');
const isProduction = process.env.NODE_ENV === 'production';
const isDev = !isProduction;
const URL_PREFIX = '/big-design';
const examplesVersion = pkg.devDependencies['@bigcommerce/examples'].replace('^', '');

module.exports = {
  assetPrefix: isProduction ? URL_PREFIX : '',
  env: {
    CODE_SANDBOX_URL: `https://codesandbox.io/s/github/bigcommerce/big-design/tree/%40bigcommerce/examples%40${examplesVersion}/packages/examples`,
    URL_PREFIX: isProduction ? URL_PREFIX : '',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [require.resolve('jsx-to-string-loader')],
    });

    return config;
  },
  exportPathMap: () => ({
    '/': { page: '/GettingStarted/GettingStartedPage' },
    '/badge': { page: '/Badge/BadgePage' },
    '/box': { page: '/Box/BoxPage' },
    '/breakpoints': { page: '/Breakpoints/BreakpointsPage' },
    '/button': { page: '/Button/ButtonPage' },
    '/checkbox': { page: '/Checkbox/CheckboxPage' },
    '/colors': { page: '/Colors/ColorsPage' },
    '/display': { page: '/Display/DisplayPage' },
    '/dropdown': { page: '/Dropdown/DropdownPage' },
    '/flex': { page: '/Flex/FlexPage' },
    '/form': { page: '/Form/FormPage' },
    '/grid': { page: '/Grid/GridPage' },
    '/icons': { page: '/Icons/IconsPage' },
    '/input': { page: '/Input/InputPage' },
    '/link': { page: '/Link/LinkPage' },
    '/margin': { page: '/Margin/MarginPage' },
    '/modal': { page: '/Modal/ModalPage' },
    '/multi-select': { page: '/MultiSelect/MultiSelectPage' },
    '/padding': { page: '/Padding/PaddingPage' },
    '/pagination': { page: '/Pagination/PaginationPage' },
    '/panel': { page: '/Panel/PanelPage' },
    '/progress-bar': { page: '/Progress/ProgressBarPage' },
    '/progress-circle': { page: '/Progress/ProgressCirclePage' },
    '/radio': { page: '/Radio/RadioPage' },
    '/select': { page: '/Select/SelectPage' },
    '/spacing': { page: '/Spacing/SpacingPage' },
    '/statefulTable': { page: '/StatefulTable/StatefulTablePage' },
    '/table': { page: '/Table/TablePage' },
    '/tabs': { page: '/Tabs/TabsPage' },
    '/textarea': { page: '/Textarea/TextareaPage' },
    '/tooltip': { page: '/Tooltip/TooltipPage' },
    '/typography': { page: '/Typography/TypographyPage' },

    // Dev route for development purposes
    ...(isDev && { '/dev': { page: '/Dev/DevPage', query: { noNav: '' } } }),
  }),
};
