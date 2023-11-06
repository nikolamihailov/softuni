import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = ({
    games,
}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
};