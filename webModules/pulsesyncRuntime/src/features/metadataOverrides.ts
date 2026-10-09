// Public runtime entry point; validation, response adaptation and live models have separate owners.
export { setMetadataOverrides, removeMetadataOverride, clearMetadataOverrides, validateMetadataPatch } from './metadataRegistry';
export { applyMetadataResponse, applyTrack, applyAlbum, applyArtist } from './metadataAdapters';
