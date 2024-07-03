import React from 'react'

const CategoryHero = ({catSlug}) => {
  return (
    <>
      <section
        className="w-breadcrumb-area"
        style={{backgroundColor : 'red'}} >
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div
                className="position-relative z-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <h2 className="section-title-light mb-2">{catSlug.catname}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb w-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                    {catSlug.subcat}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryHero
