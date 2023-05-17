import React from 'react'
import './App.css'

/**
1- props => parametre geçmeyi sağlıyor, props ile aynı anda birden fazla parametre geçilebilir.
    Bu şekilde tanımlanarak, props içerisinde beklenen parametreler ilgili yerlere yerleştirilir
      function Not(props) {
      return (
      <div className='not'>
          <h3>{props.ad}</h3>
          <h3>{props.soyad}</h3>
          <p>Tarih</p>
      </div>
      }
    Props içeren func çağırırken aşağıdaki gibi çağırılabilir.
    <Not ad='Ahmet' soyad='Vatansever'/>

2- Propslardaki parametreler isim isim verilerekte tanımlanabilir
      function Not({ad,soyad}) {
      return (
      <div className='not'>
          <h3>{props.ad}</h3>
          <h3>{props.soyad}</h3>
          <p>Tarih</p>
      </div>
      }
3-Props için değer gelmezse varsayılan değer atama, örneğin soyad null ise VATANSEVER olsun
    Propslardaki parametreler isim isim verilerekte tanımlanabilir
      function Not({ad,soyad='VATANSEVER'}) {
      return (
      <div className='not'>
          <h3>{props.ad}</h3>
          <h3>{props.soyad}</h3>
          <p>Tarih</p>
      </div>
      }
 */

export default function TodoList({ad,aciklama,tarih='23.04.1923'}) {
  return (
    <div className='todolist'>
        <h3>{ad}</h3>
        <p>{aciklama}</p>
        <hr/>
        <p>{tarih}</p>
    </div>
  )
}