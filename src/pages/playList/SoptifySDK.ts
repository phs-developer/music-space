import { useEffect } from "react";

export const SpotifySDK = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token =
        "BQAY77ovyzG3pTaB-lHol7iFEb99DA1vs5F7ldqovVqbpkR_Dz-9gxJDo_EoaFAOacBeUVLhBNDI6YiN2FW4Gkd8JGfCqEhgHMSZyMVms8x74n_jqCaSrcWFytPrXWE33E51goLPe6LNaFgvJR14DrRJPe79ALUiOC1srY1kU0xMoPS8MJuR1OajHSV-tsvuxRBupN9qEaJeJatBAfGzPLUJ9s_r";
      const player = new Spotify.Player({
        name: "Web Playback SDK Quick Start Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });
      player.addListener("ready", ({ device_id }) => {
        console.log("Ready to device" + device_id);
      });
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });
    };
  }, []);
};
