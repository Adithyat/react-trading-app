import React from 'react';
import FollowStocks from '../components/FollowStocks';


function Home() {
    return (
        <div>
            <section className="stock-list">
            <FollowStocks/>
            <div className="stock-list__grid">
                <div className="stock-list__grid-row">
                    <div className="stock-list__grid-cell">
                        <a href="!#"><span className="stock-list__btn stock-list__btn--remove">&ndash;</span></a>
                    </div>
                    <div className="stock-list__grid-cell">AAPL</div>
                    <div className="stock-list__grid-cell">253.4</div>
                    <div className="stock-list__grid-cell">
                        <a href="!#"><span className="btn-transaction btn-transaction--buy">buy</span></a>
                    </div>
                    <div className="stock-list__grid-cell">
                        <a href="!#"><span className="btn-transaction btn-transaction--sell">sell</span></a>
                    </div>
                    <div className="stock-list__grid-cell">35</div>
                </div>
                <div className="stock-list__grid-row">
                    <div className="stock-list__grid-cell">
                        <a href="!#"><span className="stock-list__btn stock-list__btn--remove">&ndash;</span></a>
                    </div>
                    <div className="stock-list__grid-cell">MSFT</div>
                    <div className="stock-list__grid-cell">456</div>
                    <div className="stock-list__grid-cell">
                        <a href="!#"><span className="btn-transaction btn-transaction--buy">buy</span></a>
                    </div>
                </div>
                <div className="stock-list__grid-row">
                    <div className="stock-list__grid-cell">
                            <a href="!#"><span className="stock-list__btn stock-list__btn--remove">&ndash;</span></a>
                    </div>
                    <div className="stock-list__grid-cell">GOOG</div>
                    <div className="stock-list__grid-cell">1005.3</div>
                    <div className="stock-list__grid-cell">
                        <a href="!#"><span className="btn-transaction btn-transaction--buy">buy</span></a>
                    </div>
                    <div className="stock-list__grid-cell">
                        <a href="!#"><span className="btn-transaction btn-transaction--sell">sell</span></a>
                    </div>
                    <div className="stock-list__grid-cell">12</div>
                </div>
            </div>
        </section>
        <section className="stock-graph">
            <div id="stockGraphContainer" className="stock-graph__container"></div>
        </section>
        <section className="stock-transactions full-width">
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Transaction ID</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">stock</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">amount</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">direction</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">price</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">total</span></div>
            </div>
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">tr3</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">AAPL</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">1</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-cell-sell">SELL</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">256</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">256</span></div>
            </div>
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">tr2</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">GOOG</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">5</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-cell-buy">BUY</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">1001</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">5005</span></div>
            </div>
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">tr1</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">AAPL</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">10</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-cell-buy">BUY</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">245</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">2450</span></div>
            </div>
        </section>
        </div>
    );
}



  
export default Home;