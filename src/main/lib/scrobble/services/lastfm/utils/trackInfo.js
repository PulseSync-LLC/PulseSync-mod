'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

const store = require('../../../../store.js');

const separatorMap = {
    0: '', // Little hack. Only the first artist will be used.
    1: ' & ',
    2: ' | ',
    3: ', ',
};

exports.getTrackInfo = getTrackInfo;
/**
 * Extracts Last.fm compatible track information from a track object
 *
 * @see https://www.last.fm/api/show/track.updateNowPlaying#params
 *
 * @param track The track to extract information from
 * @returns Last.fm compatible track information
 */
function getTrackInfo(track) {
    const title = track.substituted?.title ?? track.title;
    const artists = track.substituted?.artists ?? track.artists;
    const albums = track.substituted?.albums ?? track.albums;
    const mainArtist = artists?.[0];
    if (!title || !mainArtist?.name) {
        throw new Error('Missing required track information');
    }
    return {
        artist: getArtists(structuredClone(artists)),
        track: title,
        duration: Math.floor(track.durationMs / 1000),
        album: albums?.[0]?.title,
        albumArtist: albums?.[0]?.artists?.[0]?.name,
        trackNumber: albums?.[0]?.trackPosition?.index,
    };
}

const getArtists = (artistsArray) => {
    const separatorType = store.getModSettings()?.scrobblers?.lastfm?.separatorType;
    const separator = separatorMap[parseInt(separatorType)] ?? ' & ';
    let artistsLabel = artistsArray[0].name;
    if (separator) {
        artistsArray.shift();
        artistsArray.forEach((artist) => {
            artistsLabel += separator + artist.name;
        });
    }
    return artistsLabel;
};
