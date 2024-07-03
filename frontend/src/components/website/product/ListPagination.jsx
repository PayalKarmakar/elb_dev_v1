import React from 'react'

const ListPagination = () => {
  return (
    <>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
            <nav aria-label="Page navigation example">
            <ul className="custom-pagination pagination">
                <li className="custom-page-item page-item">
                <a className="custom-page-link page-link" href="#">Previous</a>
                </li>
                <li className="custom-page-item page-item">
                <a className="custom-page-link page-link" href="#">1</a>
                </li>
                <li className="custom-page-item page-item">
                <a className="custom-page-link page-link" href="#">2</a>
                </li>
                <li
                className="custom-page-item page-item active"
                aria-current="page"
                >
                <a className="custom-page-link page-link" href="#">3</a>
                </li>
                <li className="custom-page-item page-item">
                <a className="custom-page-link page-link" href="#">4</a>
                </li>

                <li className="custom-page-item page-item">
                <a className="custom-page-link custom-page-item page-link" href="#">Next</a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </>
  )
}

export default ListPagination
