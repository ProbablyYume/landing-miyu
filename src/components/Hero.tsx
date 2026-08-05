import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/languageContext";
import "../styles/hero.css";

declare global {
  interface Window {
    Twitch?: {
      Player: new (
        elementId: string,
        options: Record<string, unknown>,
      ) => TwitchPlayer;
    };
  }
}

interface TwitchPlayer {
  addEventListener: (eventName: string, callback: () => void) => void;
  pause: () => void;
  play: () => void;
  setMuted: (muted: boolean) => void;
}

const TWITCH_CHANNEL = "miyuvalkyrie";
const TWITCH_URL = "https://www.twitch.tv/miyuvalkyrie";
const KICK_URL = "https://kick.com/miyuvalkyrie";
const TWITCH_EMBED_SCRIPT_URL = "https://player.twitch.tv/js/embed/v1.js";
const TWITCH_PROBE_INTERVAL = 120000;

let twitchScriptPromise: Promise<void> | null = null;

function loadTwitchEmbedScript() {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Twitch embed can only load in the browser"),
    );
  }

  if (window.Twitch?.Player) {
    return Promise.resolve();
  }

  if (twitchScriptPromise) {
    return twitchScriptPromise;
  }

  twitchScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TWITCH_EMBED_SCRIPT_URL}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = TWITCH_EMBED_SCRIPT_URL;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.head.appendChild(script);
  });

  return twitchScriptPromise;
}

function getTwitchParentDomains() {
  const hostname = window.location.hostname;
  return hostname ? [hostname] : ["miyuvalkyrie.com"];
}

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const probeRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const retryTimerRef = useRef<number | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [embedDismissed, setEmbedDismissed] = useState(false);
  const [probeKey, setProbeKey] = useState(0);
  const videoSrc = `${import.meta.env.BASE_URL}medias/boucle_hero_compressed.mp4`;
  const showLiveEmbed = isLive && !embedDismissed;

  useEffect(() => {
    let cancelled = false;
    const container = probeRef.current;

    async function mountProbe() {
      if (!container || isLive) return;

      try {
        await loadTwitchEmbedScript();
        if (cancelled || !window.Twitch?.Player) return;

        const probe = new window.Twitch.Player(container.id, {
          channel: TWITCH_CHANNEL,
          width: 400,
          height: 300,
          autoplay: false,
          muted: true,
          parent: getTwitchParentDomains(),
        });

        probe.addEventListener("online", () => {
          if (!cancelled) {
            setIsLive(true);
          }
        });

        probe.addEventListener("offline", () => {
          if (cancelled) return;

          probe.pause();
          container.replaceChildren();
          retryTimerRef.current = window.setTimeout(() => {
            setProbeKey((currentKey) => currentKey + 1);
          }, TWITCH_PROBE_INTERVAL);
        });
      } catch {
        retryTimerRef.current = window.setTimeout(() => {
          setProbeKey((currentKey) => currentKey + 1);
        }, TWITCH_PROBE_INTERVAL);
      }
    }

    mountProbe();

    return () => {
      cancelled = true;
      if (retryTimerRef.current) {
        window.clearTimeout(retryTimerRef.current);
      }
      container?.replaceChildren();
    };
  }, [isLive, probeKey]);

  useEffect(() => {
    let cancelled = false;
    const container = playerRef.current;

    async function mountLivePlayer() {
      if (!container || !showLiveEmbed) return;

      try {
        await loadTwitchEmbedScript();
        if (cancelled || !window.Twitch?.Player) return;

        const player = new window.Twitch.Player(container.id, {
          channel: TWITCH_CHANNEL,
          width: "100%",
          height: "100%",
          autoplay: false,
          muted: true,
          parent: getTwitchParentDomains(),
        });

        player.setMuted(true);

        player.addEventListener("offline", () => {
          if (!cancelled) {
            setIsLive(false);
            setEmbedDismissed(false);
            setProbeKey((currentKey) => currentKey + 1);
          }
        });
      } catch {
        if (!cancelled) {
          setIsLive(false);
        }
      }
    }

    mountLivePlayer();

    return () => {
      cancelled = true;
      container?.replaceChildren();
    };
  }, [showLiveEmbed]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (showLiveEmbed) {
      video.pause();
      return;
    }

    video.play().catch(() => {
      // Browser autoplay policies may block this after user/device changes.
    });
  }, [showLiveEmbed]);

  return (
    <section
      id="hero"
      className={`hero-section${showLiveEmbed ? " hero-section-live" : ""}${isLive ? " hero-has-live" : ""}`}
    >
      <div className="hero-video-container">
        <video
          ref={videoRef}
          src={videoSrc}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div
        key={probeKey}
        id="hero-twitch-live-probe"
        ref={probeRef}
        className="hero-live-probe"
        aria-hidden="true"
      />

      {showLiveEmbed ? (
        <div className="hero-live-content">
          <button
            type="button"
            className="hero-live-close"
            aria-label={t.hero.closeLiveEmbed}
            title={t.hero.closeLiveEmbed}
            onClick={() => setEmbedDismissed(true)}
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="hero-live-copy">
            <h1 className="hero-live-title">{t.hero.liveTitle}</h1>
          </div>
          <div className="hero-live-player-wrap">
            <div
              id="hero-twitch-live-player"
              ref={playerRef}
              className="hero-live-player"
            />
          </div>
          <div className="hero-live-links">
            <a
              href={TWITCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-live-link"
            >
              <span>{t.hero.liveCta}</span>
            </a>
            <a
              href={KICK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-live-link hero-live-link-kick"
            >
              <span>{t.hero.liveKickCta}</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title-mobile">{t.hero.title}</h1>
            <div className="hero-subtitles">
              <h2 className="hero-subtitle">{t.hero.subtitle1}</h2>
              <h2 className="hero-subtitle">{t.hero.subtitle2}</h2>
              <h2 className="hero-subtitle">{t.hero.subtitle3}</h2>
            </div>
            <div className="hero-cta-row">
              <a
                href={TWITCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`hero-cta-button${isLive ? " hero-cta-button-live" : ""}`}
                onClick={(event) => {
                  if (!isLive) return;

                  event.preventDefault();
                  setEmbedDismissed(false);
                }}
              >
                <svg
                  className="twitch-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
                <span>{isLive ? t.hero.showLiveEmbed : t.hero.ctaButton}</span>
              </a>
              <a
                href={KICK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-icon-button"
                aria-label={t.a11y.kick}
                title={t.a11y.kick}
              >
                <svg
                  className="kick-icon"
                  viewBox="15 90 63 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 90H38.5714V105.698H46.4286V97.8491H54.2857V90H77.8571V113.547H70V121.397H62.1429V129.246H70V137.095H77.8571V160.642H54.2857V152.793H46.4286V144.944H38.5714V160.642H15V90Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
