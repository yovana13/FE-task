import Tags from "../ui-components/Tags/Tags";
import RelatedNews from "./RelatedNews/RelatedNews";
import styles from "./News.module.scss";
import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark_icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share_icon.svg";
import { ReactComponent as GiftkIcon } from "../../assets/icons/gift_icon.svg";
import "../../shared/styles/sharedStyles.scss";

const News = () => {
  const relatedNews = [
    {
      label: "IFC becomes first borrower to price off the Sofr",
      link: "/news-1",
    },
    { label: "468 Spac I merges with Boxine", link: "/news-2" },
    { label: "Retail bonds — be careful what you wish for", link: "/news-3" },
    { label: "Banks frontload in euros ahead of ECB meeting", link: "/news-4" },
  ];

  const iconsSection = () => {
    return (
      <div className={`${styles["top-section-aside"]}`}>
        <div className={`${styles["author"]}`}>
          By <span>Mike Turner</span>
        </div>
        <time>July 06, 2023</time>
        <div className={`${styles["icon-buttons-wrapper"]}`}>
          <button className={`${styles["icon-button"]}`}>
            <BookmarkIcon />
          </button>
          <button className={`${styles["icon-and-text-button"]}`}>
            Gift Article <GiftkIcon />
          </button>
          <button className={`${styles["icon-button"]}`}>
            <ShareIcon />
          </button>
        </div>
      </div>
    );
  };

  return (
    <article className={`${styles["news"]}`}>
      <div className={`${styles["news-wrapper"]}`}>
        <h1>
          ‘Novel’ Zambia clause could give bondholders further boost in debt
          restructuring
        </h1>
        <h2>
          Storied debut borrower sees ample demand as it spins off from Telekom
          Austria ample demand as it spins
        </h2>

        <div className="d-none d-md-flex">{iconsSection()}</div>
        <div className={`${styles["news-content"]}`}>
          <section className={`${styles["news-text"]}`}>
            <figure>
              <img
                src={require("../../assets/snow-mountains.png")}
                alt="Snow Mountains"
              />
              <figcaption>
                Caption of the image;{" "}
                <span>Author credits Credits on second row if too long</span>
              </figcaption>
            </figure>
            <p>
              Austria’s A1 Towers Holding, a telecoms infrastructure company,
              became the most recent debut issuer in Europe’s high grade
              corporate bond market on Thursday, although ratings agencies
              warned that leverage as high as 7.6 times is putting pressure on
              its creditworthiness.
            </p>
            <p>
              A1 Towers Holding, freshly first time rated Baa2 with Moody’s and
              BBB- with Fitch, opened books on a €500m no grow July 2028 (five
              year) bond at 220bp over mid-swaps.
            </p>
            <p>
              Citi, Santander and UniCredit were global coordinators and joined
              in the bookrunner group by BBVA, Erste Group and IMI-Intesa
              Sanpaolo.
            </p>
            <p>
              The trade came as A1 Towers Holding is being spun off from Telekom
              Austria to a new entity EuroTeleSites, with no recourse to its old
              owner afterwards. The spin-off is expected in the second half of
              this year. The bond will be used to pay for expenses relating to
              the spin-off.
            </p>
            <p>
              A1 Towers Holder has around 7.6 times net leverage, according to
              Fitch estimates, while Moody’s puts leverage at 6.6 times. Moody’s
              expects this to fall to 5.4 times in 2025.
            </p>
            <p>
              Both ratings agencies flagged the high leverage as putting
              pressure on the company’s rating, though both agencies have it on
              a stable outlook.
            </p>
            <p>
              “Given the high initial leverage, the rating is initially weakly
              positioned in the category, with limited room for deviation
              relative to our expectations," said Carlos Winzer, Moody's lead
              analyst for A1 Towers.
            </p>
            <p>
              The market has been fickle for issuers with lower ratings or more
              challenging stories. German family holding company Franz Haniel &
              Cie pulled a sub-benchmark deal last week, Porsche Automobil did
              not manage to fully subscribe its €500m September 2027s, and
              Italian energy company Alperia priced a trade in line with initial
              price thoughts.
            </p>
            <p>
              However, investors were keen to buy A1 Towers’ debt with €1.8bn of
              demand by the time guidance was announced at 195bp to 200bp over
              mid-swaps.
            </p>
            <p>
              “You need about three times covered at guidance for a deal to be a
              success at the moment,” said a syndicate banker in London off the
              trade. “Otherwise it gets a bit shaky when you close books.”
            </p>
            <h3>State stake key</h3>
            <p>
              A1 Towers is around a quarter owned by the Austrian government,
              and after the spin-off, will be 28.43% owned by Austrian sovereign
              wealth fund Österreichische Beteiligungs. America Movil is the
              biggest shareholder.
            </p>
            <p>
              “The state ownership is an important factor,” said a syndicate
              banker off the trade in London. “It’s not really a proxy for
              Austrian sovereign debt, but it will help sell the story to
              investors.”
            </p>
            <p>
              Without Austrian state ownership, A1 Towers would be junk rated by
              Fitch and Baa3 by Moody’s. The latter agency sees Austria’s
              ownership as so fundamental that it qualifies the company as a
              government-related issuer.
            </p>
            <p>
              While A1 Towers is being spun off from Telekom Austria, it still
              has a large backlog of contracts with the company, which helps
              buoy the rating. A1 Towers is active outside of Austria, in
              Bulgaria, Croatia, Serbia, Slovenia and North Macedonia, with
              these countries providing around 40% of the company’s revenues and
              Ebitda.
            </p>
            <div>
              <h4>Tags</h4>
              <Tags
                tags={[
                  "Corporate Bonds",
                  "High grade and crossover bonds",
                  "Euro",
                  "Europe",
                  "Austria",
                  "Emerging Markets",
                ]}
              />
            </div>
          </section>
          <aside >
            <div className="d-flex d-md-none">{iconsSection()}</div>
            <section>
              <h4>Related</h4>
              <RelatedNews relatedNews={relatedNews} />
            </section>
          </aside>
        </div>
      </div>
    </article>
  );
};
export default News;
