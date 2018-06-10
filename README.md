## **BEFORE YOU OPEN AN ISSUE**

All issues regarding Medusa should be posted on the [pymedusa/Medusa](https://github.com/pymedusa/Medusa/issues) issue tracker.

Search for the error in the search box. Re-use the existing issue if it already exists, even if it is closed.  
If you don't find it please follow the guidelines below, otherwise the issue will be closed.

**Update problems? Try this first:**

Stop Medusa, SSH(Linux)/CMD(Windows) and enter Medusa folder
```
git remote set-url origin https://github.com/pymedusa/Medusa.git
git fetch origin
git checkout master
git branch -u origin/master
git reset --hard origin/master
git pull
```

## SUBMITTING A BUG/ISSUE TICKET
(DO NOT POST ANYTHING THAT CONTAINS YOUR LOGIN INFORMATION OR API KEY)  
Please include the following when opening a new ticket:
 - Branch
 - Commit hash
 - Your operating system and python version
 - What you did
 - What happened
 - What you expected
 - Link to a copy/paste of your logfile with clear debug info of the error on [Gist](http://gist.github.com)

## ENABLING DETAILED DEBUGGING FOR LOGS
1. Open Medusa interface
2. Gears Menu > General Settings > Advanced Settings
3. Enable 'Enable debug'
4. Save changes

**Note:** Synology users can use WinSCP to gain access/browse to the root where the Medusa log is located.  
`/volume1/@appstore/sickbeard-custom/var/Logs/sickrage.log`

## [Frequently Asked Questions (FAQ)](https://github.com/pymedusa/Medusa/wiki/Frequently-Asked-Questions)

## [Wiki](https://github.com/pymedusa/Medusa/wiki)
