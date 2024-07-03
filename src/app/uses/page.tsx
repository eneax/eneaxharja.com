export const metadata = {
  title: "Uses",
  description: "A curated list of my favorite tools and software.",
};

export default function UsesPage() {
  return (
    <section className="antialiased max-w-xl mx-4 mt-8 md:mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Uses</h1>

      <p className="mb-4">A curated list of my favorite tools and software.</p>

      <div className="prose">
        <h2>Hardware</h2>
        <ul>
          <li>MacBook Pro (16-inch, 2021)</li>
        </ul>

        <h2>Apps</h2>
        <ul>
          <li>
            <a href="https://www.apple.com/safari">Safari</a> as daily browser
          </li>
          <li>
            <a href="https://arc.net">Arc</a> when I need to test something on
            Chromium
          </li>
          <li>
            <a href="https://code.visualstudio.com">Visual Studio Code</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Terminal_(macOS)">
              Terminal (macOS)
            </a>{" "}
            with <a href="https://ohmyz.sh">{`"Oh My ZSH!"`}</a>
          </li>
          <li>
            You can see my config files over at my{" "}
            <a href="https://github.com/eneax/dotfiles">Dot Files</a> repo
          </li>
        </ul>

        <h2>Chromium Extensions</h2>
        <ul>
          <li>
            <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?utm_source=chrome-ntp-icon">
              uBlock Origin
            </a>
          </li>
          <li>
            <a href="https://chromewebstore.google.com/detail/i-dont-care-about-cookies/fihnjjcciajhdojfnbdddfaoknhalnja?utm_source=chrome-ntp-icon">{`I don't care about cookies`}</a>
          </li>
          <li>
            <a href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh">
              JSON Viewer
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
