import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from './data'

const Iphone = () => {
    const {id} = useParams();
    const phone = data?.find((el) =>{
        return el?.id === +id;
    })

    console.log(phone)

  return (
    <div className="container">
    <div id="card_iphone">
        <img src={phone?.img} alt="" />
        <div id='iphone_div'>
            <p id="iphone_name">{phone?.name}</p>
            <p id='iphone_desc'>{phone?.desc}</p>

            <p id='iphone_menu'>Color</p>
            <div id='iphone_grid'>
                <div id='iphone_card'>
                    <div id='black'></div>
                    <p id='iphone_desc'>{phone?.color1}</p>
                </div>
                <div id='iphone_card'>
                    <div id='red'></div>
                    <p id='iphone_desc'>{phone?.color2}</p>
                </div>
            </div>

            <p id='iphone_menu'>Harddrive size</p>
            <div id='iphone_grid'>
                <div id='iphone_card'>
                    <p id='iphone_desc'>{phone?.size1}</p>
                </div>
                <div id='iphone_card'>
                    <p id='iphone_desc'>{phone?.size2}</p>
                </div>
            </div>
            <p id='iphone_menu'>{phone?.price}</p>
        </div>
    </div>
    </div>
  )
}

export default Iphone