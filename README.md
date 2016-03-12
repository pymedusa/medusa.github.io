**BEFORE YOU OPEN AN ISSUE**
===============

Feature Requests are not allowed on the issue tracker. We now use [FeatHub](http://feathub.com/Medusa/Medusa) for feature requests: [![Feature Requests](https://cloud.githubusercontent.com/assets/390379/10127973/045b3a96-6560-11e5-9b20-31a2032956b2.png)](http://feathub.com/Medusa/Medusa)

Search for the error in the search box. Re-use the existing issue if it already exists, even if it is closed.
If you don't find it please follow the guidelines below, otherwise the issue will be closed.

**Update problems? Try this first:**

Stop Medusa, SSH(Linux)/CMD(Windows) and enter Medusa folder
```
git remote set-url origin https://github.com/pymedusa/SickRage.git
git fetch origin
git checkout master
git branch -u origin/master
git reset --hard origin/master
git pull
```

## Medusa Bug/Issue Tracker
===============

This repo is dedicated to tracking bugs and issue reports only.

## SUBMITTING A BUG/ISSUE TICKET
(DO NOT POST ANYTHING THAT CONTAINS YOUR LOGIN INFORMATION OR API KEY)<br />
Please include the following when opening a new ticket:
 - Branch
 - Commit hash
 - Your operating system and python version
 - What you did
 - What happened
 - What you expected
 - Link to a copy/paste of your logfile with clear debug info of the error on [GIST](http://gist.github.com)

## ENABLING DETAILED DEBUGGING FOR LOGS
1. Open SR interface
2. Menu General Settings > Advanced Settings
3. Enable 'Enable debug'

Note: Synology users can use WinSCP to gain access/browse to the root where the Medusa log is located. /volume1/@appstore/sickbeard-custom/var/Logs/sickrage.log

## FAQ

https://github.com/pymedusa/SickRage/wiki/Frequently-Asked-Questions

## Wiki

https://github.com/pymedusa/SickRage/wiki
