import UaParser from 'ua-parser-js';

export function getUI(ua) {
  const uaParser = new UaParser();
  uaParser.setUA(ua);

  const result = uaParser.getResult();
  if (result.device.type === 'mobile' || result.device.type === 'tablet') {
    return 'mobile';
  }
  return 'desktop';
}
