### v0.1.6:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

 - Added git clean execution during update process
 - Added the ability to save the sort in the history page and the ability to sort by "subtitles"
 
**Fixes:**

 - Fixed "Failed Downloads" page not using correct sorting
 - Fixed a lot of errors reported by codacy
 - Fixed expected titles which should not contain number-only items
 - Fixed error when reading image with 0 bytes and try to delete it (if it fails warn user to delete it)
 - Fixed release names being cut off for Limetorrents & ExtraTorrents
 - Fixed some CSS rules
 - Fixed issues beeing submitted to Pull Requests
 - Fixed "unsafe attempt to load URL" JS issue
 - Fixed custom guessit function beeing loaded before other modules that depend on it
 - Fixed unicode error when reading logs
 - Fixed "SEARCHQUEUE" and "SHOWQUEUE" log filter not working
 - Fixed several guessit bug fixes & did some enhancements to it
 - Fixed another multiple formats corner case in guessit
 - Removed note in PostProcessing settings regarding the need to have the quality in the naming pattern
 - Upgraded DB to 44 (to keep compatible with SickRage users that decide to move to Medusa)
 - Moved from a Sickbeard/Sickrage directory structure to one named Medusa
 - Moved "search" related files to their own directory
 - Refactored all python imports
 - Rebranded all code to Medusa
 - Updated guessit to hash:57fe78f and rebulk to 0.7.6
 - Move unittests to a "legacy" directory
 - Reorganized tests
 - Dropped support for databases with version prior to 40
 - Improved DB version check
 
<br />

### v0.1.5.2:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**Fixes:**

 - Fixed expected titles should not contain number-only items
 - Fixed canonical_name when dict has non-ascii characters

<br />

### v0.1.5.1:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**Fixes:**

 - Fixed database upgrade for users coming from SickRage
 - Fixed mass update 'delete' action
 - Improved various code sections

<br />

### v0.1.5:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

 - Added proper tags using INFO icon in history page
 - Added a PROPER codec check to avoid snatching propers when codec is different (e.g. x265 propering x264)
 - Added NZBget connection test
 - Added faster and more reliable way of showing propers in history
 - Added CloudFlare bypass code (fixes providers behind CF's protection, e.g. Torrentz2)

**Fixes:**

- Fixed checkversion error
- Fixed Pretome provider's seeders/leechers
- Fixed tv_episode table not being updated with new snatch info
- Fixed manual season pack search not using indexer number
- Fixed footer stats not refreshing
- Fixed issue submitter error
- Fixed removing folder when they don't exist
- Fixed mako error when restoring backup
- Fixed not using encoding when parsing file
- Fixed collapse button in manage status and missed subtitles pages
- Fixed "database or disk is full" showing as error. Should be warning
- Fixed exception in anime with numbers and no season information
- Fixed ExtraTorrent provider
- Fixed TorrentDay login
- Fixed Kodi not creating metadata
- Fixed unable to get new pin when token expired situation
- Fixed not discarding multi season torrents (not supported for now)
- Fixed superfluous parsing of 'related torrents' for ExtraTorrent
- Fixed using already processed propers when doing a forced proper search 
- Fixed reading .nfo when special chars in the filename
- Fixed scene exceptions update if AniDB doesn't have the show
- Fixed not being able to get new token when Trakt token expired
- Fixed shows losing show information after unsuccessful IMDb update
- Added "git clean" for source folders and lib folder with git reset
- Added proper tags info to history database
- Improved scene exceptions code
- Improved show updater code
- Improved all python "imports"
- Improved GitHub code
- Improved post-processor code

<br />

### v0.1.4.1:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**Fixes:**

- A lot of JS improvements
- Added Torrentz2 provider and removed the old one
- Fixed PostProcessor and Notification pages not saving
- Fixed guessit parsing with multiple formats
- Fixed providers: SSC and Zooqle
- Upgraded subliminal to 2.0.5
- Refactored issue submission and log files reader
- A lot of under the hood code improvements

<br />

### v0.1.4:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

**New Features:**

- Get broken providers from GitHub and force disable broken providers (avoids having to push changes for new broken providers)
- Clean Kodi library after re-download or manual search another release of an episode (Kodi would have a link to an episode that doesn't exist anymore)
- Started to work in the API v2

**Fixes:**

- Fixed logging page not respecting redirection page
- Fixed manual search providers only not having cache trimmed
- Fixed RARBG warning message when it should be DEBUG
- Fixed episode refiner using wrong release names
- Fixed several UI issues
- Fixed adding Shows not loading after save in custom options
- Fixed seeders and leechers from transmitthenet provider
- Fixed 'no space left' log message as ERROR. Should be warning.
- Fixed UI showing two 'date style' selects
- Fixed issue causing threads to stop when Trakt notifications fails
- Fixed IPTorrents provider
- Fixed Imdb popular shows page
- Fixed multiple video formats in guessit parsing
- Fixed guessit parser when show titles contain numbers and unicode chars
- Fixed Release Groups with dash (ie. GROUP-BUYMORE will become GROUP)
- Fixed not escaping html characters in logs view page
- Fixed displayshow showing info of old status when new status is snatched
- Fixed possible overlapping in PP by not calling PP in postpone if auto PP is enabled
- Improved the Recommended Shows Lists
- Improved providers code
- Improved tests/travis checks
- Improved config general page loading (a lot faster now)
- Added SxxEPxx pattern to guessit
- Added base url to templates
- Added pep8 naming config to tests/travis
- Added notifications when blacklisting shows in Trakt recommended lists
- Removed legacy parser
- Remove option 'subtitles_download_in_pp' - when postpone enabled it will always download subtitle in PP folder
- Updated JQuery

<br />

### v0.1.3:

[full changelog](https://github.com/pymedusa/SickRage/commits/master)

- Added Logger improvements (Lazy logging) 
- Added KAT to broken providers("!" next to name)
- Added log when unwanted extension files were found
- Added 'sub' and 'idx' to default allowed extensions
- Improved Enhance quality and audio channels detection with guessit
- Improved ExtraTorrent (rewrite)
- Improved Recommended Lists
- Improved UI (clean up)
- Removed torcache.net 
- Fixed manual snatch of leaked items not keeping snatched status
- Fixed proper search in nzb providers
- Fixed GTF tracker
- Fixed parsing of air-by-date results when only air-by-date shows
- Fixed XEM error when server is down
- Fixed TorrentDay not warning when no cookies were set 
- Fixed TorrentDay when failed to parse an item
- Fixed showing seeds/leechs in log when NZB
- Fixed season special wrongly detected as season pack 

**New Features:**

- Added a refiner that will enrich the video information with tvdbid, imdb_id and <br />
  other information present in our database instead of query indexer
- Added Guessit name parser implementation
- Skip Paused show on Nightly Update
- Added an option Display show banner and Fanart in the background
- Removed associated files when episode gets deleted
- Added unknown embedded subtitles check before postpone file if no subs associated
- Added setting in manual PP to skip subtitle check when 'postpone if no subs' is enabled
- Changed snatch message to 'Started PROPER download' if snatches a PROPER
- Added an option to stop download other subtitle wanted languages when we already downloaded one
- Avoid process samer Proper over and over
- Propers are now detected using 'guessit' and not check if 'proper' is in release name
- Delete any empty season folders after deletion of associated files (when episode gets deleted)
- Added size and number of episode to footers in season tables

<br />

### v0.1.0:

[full changelog: part 1](https://github.com/pymedusa/SickRage/compare/initial-fork...e9b23aa) [part 2](https://github.com/pymedusa/SickRage/compare/e9b23aa...e1c7479) [part 3](https://github.com/pymedusa/SickRage/compare/e1c7479...v0.1.0)

* Forked SickRage and rebranded to Medusa
* Added manual search so users can select the search result they want
* Improved detection of qualities (AVC/HEVC/WEB-DL/WEB-RIP and many others)
* Improved subtitle searches and added refiners for better subtitle matches
* Added Preferred/Undesired word lists to complement the Required/Ignored lists for better result filtering
* Fixed Compact history display so all actions for a release are now shown
* and many, many more bugfixes and code cleanup.
