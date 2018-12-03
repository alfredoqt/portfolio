const childProcess = require('child_process');

const githubUsername = 'AlfredoQT';

exports.push = (req, res) => {
    const { ref, sender } = req.body;
    // check if the reference is the master and the user is mine
    if (ref.indexOf('master') > -1 && githubUsername === sender.login) {
        childProcess.exec('cd ~ && ./deploy.sh', (err, stdout, stderr) => {
            logger.info(stdout);
        });
        return res.status(200).send({ message: 'Deploy started.' });
    }
    return res.status(200).send({ message: 'Deploy not started.' });
};
