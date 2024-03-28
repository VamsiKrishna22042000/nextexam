const TrendingPosts = () => {
    return (
        // Trending Section
        <div className="col-lg-4">

            <div className="trending">
                <h3>Trending</h3>
                <ul className="trending-post">
                    <li>
                        <a href={`/blog/places-of-interest-in-jharkhand/`}>
                            <span className="number">1</span>
                            <h3>Places of Interest in Jharkhand</h3>
                            <span className="author">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/blog/freedom-fighters-of-jharkhand/`}>
                            <span className="number">2</span>
                            <h3>Freedom Fighters of Jharkhand</h3>
                            <span className="author">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/blog/tribal-revolts-jharkhand/`}>
                            <span className="number">3</span>
                            <h3>History of Tribal Revolts in Jharkhand</h3>
                            <span className="author">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/blog/rivers-of-jharkhand/`}>
                            <span className="number">4</span>
                            <h3>Drainage System of Jharkhand</h3>
                            <span className="author">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/blog/administrative-systems-of-jharkhand/`}>
                            <span className="number">5</span>
                            <h3>Administrative Systems of Jharkhand</h3>
                            <span className="author">Admin</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default TrendingPosts;