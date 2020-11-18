import React from 'react'
import './Add.scss'
const Add=()=>{
    
    return(
        <form action="http://192.168.1.108:8080/api/v1/addProduct" method='POST' encType="multipart/form-data">
            <label >Наименование</label><input type="text" name="name" autoComplete="off"/>
            <label >Описание</label><textarea name="description"/>
            
            <label>Тип лекарства</label><select name="type">
                <option value="таблетка">Таблетка</option>
                <option value="сироп">Сироп</option>
                <option value="мазь">Мазь</option>
            </select>
            <label>Цена</label><input type="number" name="price"/>
            <label>Изображение товара</label><input type="file" name="file" id=""/>
            <button>Добавить</button>
        </form>
    )
}

export default Add