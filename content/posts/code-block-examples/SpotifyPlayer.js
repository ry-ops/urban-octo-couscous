import * as React from "react"

// Size presets, defined by Spotify
const sizePresets = {
  normal: {
    width: `100%`,
    height: `352px`,
  },
  compact: {
    width: `100%`,
    height: `152px`,
  },
}

function SpotifyPlayer({ albumUri = `6U9e0w6QS6T9qTbGBMK4Af`, size = `normal` }) {
  return (
    <iframe
      title="Spotify"
      style={{
        borderRadius: `12px`,
      }}
      src={`https://open.spotify.com/embed/album/${albumUri}?theme=0`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  )
}

export default SpotifyPlayer
