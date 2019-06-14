module.exports = {

    run: function() {

        console.log('Color diff calculator started\n\n')
        const readlineSync = require('readline-sync')
        
        const hex2rgb = require('./hex2rgb')
        const rgb2hsl = require('./rgb2hsl')

        let hex1 = readlineSync.question('what\'s the 1st HEX code? ');
        let hex2 = readlineSync.question('what\'s the 2d HEX code? ');
        let hsl1 = rgb2hsl(hex2rgb(hex1))
        let hsl2 = rgb2hsl(hex2rgb(hex2))

        let diff = new Object()
        diff['h'] = hsl1[0] - hsl2[0];
        diff['s'] = hsl1[1] - hsl1[1] + '%';
        diff['l'] = hsl1[2] - hsl2[2] + '%';

        console.log('\n');
        console.log('Diff between ' + hex1 + ' and ' + hex2 + ':' );
        console.log(diff);
        console.log('\n');

    }
};
