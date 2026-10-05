const os = require('os');

// 1. Operating System Info
console.log('=== System Information ===');
console.log('Platform:', os.platform());   // 'win32', 'darwin', 'linux'
console.log('Architecture:', os.arch());   // 'x64', 'arm64'
console.log('Hostname:', os.hostname());   // Computer name

// 2. Memory Information
console.log('\n=== Memory Information ===');
const totalMemory = os.totalmem() / 1024 / 1024 / 1024; // Convert to GB
const freeMemory = os.freemem() / 1024 / 1024 / 1024;   // Convert to GB

console.log(`Total Memory: ${totalMemory.toFixed(2)} GB`);
console.log(`Free Memory: ${freeMemory.toFixed(2)} GB`);
console.log(`Memory Usage: ${((totalMemory - freeMemory) / totalMemory * 100).toFixed(1)}%`);

// 3. CPU Information
console.log('\n=== CPU Information ===');
const cpus = os.cpus();
console.log(`CPU Cores: ${cpus.length}`);