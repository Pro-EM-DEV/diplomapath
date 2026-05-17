import * as icons from 'lucide-react';
const keys = Object.keys(icons).filter(k => 
  k.toLowerCase().includes('linked') || 
  k.toLowerCase().includes('you') || 
  k.toLowerCase().includes('insta') || 
  k.toLowerCase().includes('twit') ||
  k.toLowerCase().includes('globe') ||
  k.toLowerCase().includes('extern')
);
console.log(keys.join('\n'));
