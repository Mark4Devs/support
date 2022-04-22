

function Footer() {
    return(
        <div className='section pt-5 pb-5'>
        <h3 className='heading mb-5'>Контакти</h3>
        <div className='contacts-container'>
          <div className='info'>
            <h5>Назва</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eum ea magni ipsum similique minima impedit delectus, dolores, cum 
              quidem voluptates eligendi nisi unde voluptate est ex, molestiae distinctio 
              atque doloribus! 
            </p>
            <h5>Адреса</h5>
            <span>121 Rexford Str., West-Side Av., New York<br/>NY-92103-9000</span>
          </div>
          <div className='info'>
            <h5>Соцмережі:</h5>
            <span><a href="#facebook">https://link/fb-page/</a></span><br/>
            <span><a href="#instagram">https://link/ig-page/</a></span>  
            <h5 className='mt-4'>Телефон:</h5>
            <span>+(380)xx-xxx-xx-xx</span><br/>
            <span>+(380)xx-xxx-xx-xx</span>
          </div>
        </div>
      </div>
    )
}

export default Footer;