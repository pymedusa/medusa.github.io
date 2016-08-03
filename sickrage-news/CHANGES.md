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

### v0.1.0:

[full changelog: part 1](https://github.com/pymedusa/SickRage/compare/initial-fork...e9b23aa) [part 2](https://github.com/pymedusa/SickRage/compare/e9b23aa...e1c7479) [part 3](https://github.com/pymedusa/SickRage/compare/e1c7479...v0.1.0)

* Forked SickRage and rebranded to Medusa
* Added manual search so users can select the search result they want
* Improved detection of qualities (AVC/HEVC/WEB-DL/WEB-RIP and many others)
* Improved subtitle searches and added refiners for better subtitle matches
* Added Preferred/Undesired word lists to complement the Required/Ignored lists for better result filtering
* Fixed Compact history display so all actions for a release are now shown
* and many, many more bugfixes and code cleanup.
