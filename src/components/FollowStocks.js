import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { fetchStocks, addStock } from '../data/actions/actions.js';

const FollowStocks = (props) => {
    const [ isModalVisble, toggleModal ] = useState(false);

    useEffect(() => {
        props.fetchStocks();
    }, [props.fetchStocks]);



    return (
        
        <React.Fragment>
            <h2 className="stock-list__title">Stocks that I follow <a href="!#"><span className="stock-list__btn stock-list__btn--add" onClick={() => toggleModal(!isModalVisble)}>+</span></a></h2>
            
            {isModalVisble &&
            <Modal>
                <div className="modal">
                    <div className="modal__overlay"></div>
                    <div className="modal__content">
                        <div className="modal__close" onClick={() => toggleModal(!isModalVisble)}>x</div>
                        <h2 className="modal__h2">Select a new stock to follow</h2>
                        <select id="stockID" className="modal__dropdown">
                            {props.stocks.map(stock => {
                                return <option value={stock.symbol}>{stock.name}</option>
                            })}
                        </select>

                        <button className="modal__btn" onClick={() => props.addStock(document.getElementById('stockID').value)}>Add</button>
                    </div>
                </div>
            </Modal>
            }      
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        stocks: state.stocks.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStocks: () => dispatch(fetchStocks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowStocks);