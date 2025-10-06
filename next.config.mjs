const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';
const detectedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? `/${repoName}` : '');

const basePath = detectedBasePath === '/' ? '' : detectedBasePath;

export default {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};
