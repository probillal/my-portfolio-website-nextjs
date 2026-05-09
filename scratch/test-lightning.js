try {
  const native = require('lightningcss-win32-x64-msvc');
  console.log('Successfully loaded lightningcss-win32-x64-msvc');
  console.log('Keys:', Object.keys(native));
} catch (err) {
  console.error('Failed to load lightningcss-win32-x64-msvc:', err.message);
}

try {
  const lightning = require('lightningcss');
  console.log('Successfully loaded lightningcss');
} catch (err) {
  console.error('Failed to load lightningcss:', err.message);
}
