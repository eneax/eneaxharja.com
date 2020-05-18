export const darkTheme = {
  body: '#1c1c1c',
  bodyLighter: 'rgb(25, 26, 27)',
  text: '#fff',
  textLighter: '#868e96',
  primary: '#3ddc84',
  primaryLighter: 'rgba(61, 220, 132, .3)',
  primaryDarker: 'rgba(61, 220, 132, .8)',
  primaryDarkerHover: 'rgba(61, 220, 132, .6)',
  secondary: '#4285f4',
  secondaryLighter: '#8ab4f8',
};

export const whiteTheme = {
  body: '#fff',
  text: '#000',
};

export const handleLanguageColor = language => {
  switch (language) {
    case 'html':
      return `color: #fff; background: rgb(0, 90, 156)`;
    case 'css':
      return `color: #fff; background: rgb(255, 152, 0)`;
    case 'json':
      return `color: #232129; background: #f5f0f6`;
    case 'js':
      return `color: #232129; background: rgb(247, 223, 30)`;
    case 'jsx':
      return `color: #232129; background: rgb(97, 218, 251)`;
    case 'graphql':
      return `color: #fff; background: rgb(225, 0, 152)`;
    case 'shell':
      return `color: #232129; background: #d9d7e0`;
    case 'bash':
      return `color: #232129; background: #d9d7e0`;
    default:
      return `color: #232129; background: #fff`;
  }
};
