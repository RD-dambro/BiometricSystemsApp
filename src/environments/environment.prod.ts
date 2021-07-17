
export const environment = {
  production: true,
  WEB: {
    HOST: 'localhost',
    PORT: 3000,
  },
  MEDIA: {
    HOST: 'localhost',
    PORT: 8000,
    APP: 'live',
  },
  RABBIT: {
    HOST: 'localhost',
    PORT: 5672,
    USERNAME:'user',
    PASSWORD:'password',
    VIRTUALHOST:'vhost',

    EXCHANGE: 'message',
    EXCHANGETYPE: 'topic',
    QUEUE: 'queue_name'
  },
};
