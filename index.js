const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';

const makeCommit = n => {
    if (n === 0) {
        const git = simpleGit();
        git.push();
        return;
      }
    const x = Math.floor(Math.random() * 55); 
    const y = Math.floor(Math.random() * 7); 
    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();

    const data = {
    date: DATE
    }

    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data,() => {
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }, makeCommit.bind(this, --n));
        }
    );
}

makeCommit(100);




// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const random = require('random');
// const FILE_PATH = './data.json';

// const makeCommit = n => {
//   if (n === 0) {
//     const git = simpleGit();
//     git.push();
//     return;
//   }

//   const startDate = moment('2022-01-01');
//   const endDate = moment('2022-11-26');
//   const randomDays = Math.floor(Math.random() * endDate.diff(startDate, 'days'));
//   const randomDate = startDate.clone().add(randomDays, 'days');

//   const DATE = randomDate.format();

//   const data = {
//     date: DATE
//   }

//   console.log(DATE);

//   jsonfile.writeFile(FILE_PATH, data,() => {
//     simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }, makeCommit.bind(this, --n));
//   });
// }

// makeCommit(50);