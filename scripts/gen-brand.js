const fs = require('fs');
const logoBuf = fs.readFileSync('public/globo-tech-logo.png');
const textBuf = fs.readFileSync('public/globo-tech-text.png');

const content = `// Auto-generated brand assets from official Globo Tech company pad
export const GLOBO_TECH_LOGO_DATA_URL = 'data:image/png;base64,${logoBuf.toString('base64')}';
export const GLOBO_TECH_TEXT_DATA_URL = 'data:image/png;base64,${textBuf.toString('base64')}';

export const COMPANY_DETAILS = {
  name: 'Globo Tech',
  addressLine1: 'Rahman Chamber (2nd Floor),',
  addressLine2: '12/13 Motijheel C/A, Dhaka-1000.',
  phone: '+88 01622-152133, 01715-763303',
  email: 'info@globotechbd.com',
  website: 'www.globotechbd.com',
};
`;

fs.writeFileSync('src/lib/brandAssets.ts', content);
console.log('Successfully created src/lib/brandAssets.ts');
