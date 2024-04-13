import type { EndpointConfig } from '@directus/extensions';

const endpoint: EndpointConfig = {
  id: 'file-preview',
  handler: (router) => {
    router.get('/:filename', (req, res) => {
      const { filename } = req.params;
      const rootDir = __dirname.split('/').slice(0, -3).join('/');
      res.removeHeader('Content-Security-Policy');
      res.sendFile(`${rootDir}/uploads/${filename}`);
    });
  },
};

export default endpoint;
