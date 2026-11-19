const STEAM_ASSETS = "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5502520";

export type GameFeatureKey =
  | "farming"
  | "livestock"
  | "beekeeping"
  | "production"
  | "villagers"
  | "business"
  | "economy";

export interface GameFeature {
  key: GameFeatureKey;
  video: {
    poster: string;
    webm: string;
    mp4: string;
    width: number;
    height: number;
  };
}

export interface Game {
  slug: string;
  name: string;
  steamAppId: number;
  steamUrl: string;
  headerImage: string;
  backgroundImage: string;
  platforms: string[];
  genres: string[];
  features: GameFeature[];
  screenshots: string[];
}

function featureVideo(hash: string, height: number): GameFeature["video"] {
  const base = `${STEAM_ASSETS}/extras/${hash}`;
  return {
    poster: `${base}.poster.avif`,
    webm: `${base}.webm`,
    mp4: `${base}.mp4`,
    width: 1170,
    height,
  };
}

function screenshot(hash: string): string {
  return `${STEAM_ASSETS}/${hash}/ss_${hash}.1920x1080.jpg`;
}

export const hayloop: Game = {
  slug: "hayloop",
  name: "Hayloop",
  steamAppId: 5502520,
  steamUrl: "https://store.steampowered.com/app/5502520/Hayloop",
  headerImage: `${STEAM_ASSETS}/c1131d36646e78961547e66f0ff71b884b6e05b5/header.jpg`,
  backgroundImage: `${STEAM_ASSETS}/42c3b6d9db5983bc3221ee4637ddaa7df028223e/page_bg_raw.jpg`,
  platforms: ["Windows"],
  genres: ["Simulation", "Early Access"],
  features: [
    { key: "farming", video: featureVideo("f6f6d3a2643b8eb1b4d746c31bc6308f", 274) },
    { key: "livestock", video: featureVideo("2c2abb1847bf6489ec8451bb7010f968", 456) },
    { key: "beekeeping", video: featureVideo("0013cfe3af86bcfd231f673fdbee02ea", 456) },
    { key: "production", video: featureVideo("3347f47fe4101e4430c53257da8c23ef", 456) },
    { key: "villagers", video: featureVideo("db80f985dd78263686999b2782f2a80b", 456) },
    { key: "business", video: featureVideo("b82f7d1b8052b55455dc539995280237", 274) },
    { key: "economy", video: featureVideo("be6bcaf5fbddcfb9256fa03208bd60a5", 456) },
  ],
  screenshots: [
    "ec4b566486d9ccb2715b1a1ea99ea9210e56a845",
    "20657f2d1581dc61e398ba7a66f21a79622a15c7",
    "db486ae293b2ea128ffc8a0dcf796459fb687736",
    "3d6db196969340826694b5532177f64bf5e75fc2",
    "a261e0aa32714d90a7607c5bb4cbba84bb6e3be4",
    "210509b68bcedf68d83f2586817274f9ec549bc2",
    "a80bbcddecb39ebcc785fdee8686dd0ca4c6c333",
    "618a4890638b74a767eea67811c9be9fb622555c",
    "6cfc7fe1d2156c3d0f878d57935135ec568279c6",
  ].map(screenshot),
};
