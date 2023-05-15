import React from 'react'
import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {

        return (
            <FlipMove>
                <div className='list' key={item.key}>

                    <p>
                        <input type="text"
                            id={item.text}
                            value={item.text}
                            onChange={
                                (e) => {
                                    props.setUpdate(e.target.value, item.key)
                                }
                            }
                        />
                        <span>
                            <FontAwesomeIcon className='faicons' icon='trash'
                                onClick={() => props.deleteItem(item.key)}
                            />
                        </span>
                    </p>
                </div>
            </FlipMove>
        );
    });
    return (
        <div>{listItems}</div>

    )
}

export default ListItems