import React from 'react'
import { Link, useMatches } from 'react-router-dom'

const PostCreate = () => {
    let matches = useMatches();
    let crumbs = matches.filter(match => match.handle && match.handle.crumb)
    .map((match, index) => {
        const crumb = match.handle.crumb;
        const path = match.pathnameBase;
        return (
            <span key={index}>
              {crumb}
              {index < matches.length - 1 && ' > Create Post'}
            </span>
          );
    })
    
   
    
  return (
    <>
      
    <div className="flex-grow-1 align-items-center">
        <main className="dashboard-main min-vh-100">
            <div className="d-flex flex-column gap-4 pb-110">
                
                <div>
                <h3 className="text-24 fw-bold text-dark-300 mb-2">Create Post</h3>
                <ul className="d-flex align-items-center gap-2">
                    
                    {crumbs}
                    
                </ul>
                </div>
                
                <div>
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                    <form>
                        <div className="d-flex flex-column gap-4">
                        
                        <div className="gig-info-card">
                            
                            <div className="gig-info-header">
                            <h4 className="text-18 fw-semibold text-dark-300">
                                Project Info
                            </h4>
                            </div>
                            <div className="gig-info-body bg-white">
                            <div className="row g-4">
                                <div className="col-12">
                                <div className="form-container">
                                    <label htmlFor="title" className="form-label"
                                    >Title Name*</label>
                                    <input
                                    type="text"
                                    className="form-control shadow-none"
                                    placeholder="Brote - Cleanin Service Elementor Template Kit"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-container">
                                    <label htmlFor="category" className="form-label">Select Category*</label>
                                    <select
                                    id="s"
                                    autoComplete="off"
                                    className="form-select shadow-none"
                                    >
                                    <option value="0">Site Template</option>
                                    <option value="1">UX/UI Design</option>
                                    <option value="2">Template Kits</option>
                                    <option value="3">Ecommerce</option>
                                    <option value="4">Blogging</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-container">
                                    <label htmlFor="subcategory" className="form-label">Select SubCategory*</label>
                                    <select
                                    id=""
                                    autoComplete="off"
                                    className="form-select shadow-none"
                                    >
                                    <option value="0">Corporate</option>
                                    <option value="1">Creative</option>
                                    <option value="2">Retail</option>
                                    <option value="3">Technology</option>
                                    <option value="4">Personal</option>
                                    <option value="4">Nonprofit</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-12">
                                <label htmlFor="description" className="form-label">Description*</label>
                                
                                    <input type="textarea"  className="w-editor-wrapper"/>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="gig-info-card">
                            
                            <div className="gig-info-header">
                            <h4 className="text-18 fw-semibold text-dark-300">
                                Pricing Package
                            </h4>
                            </div>
                            <div className="gig-info-body bg-white">
                            <div className="row g-0 price-pack-wrapper">
                                <div className="col-md-4">
                                <div className="gig-pricing-pack border-end">
                                    <div className="p-2 ps-3 border-bottom">
                                    <span className="pricing-pack-name">Basic</span>
                                    </div>
                                    <div className="pack-description border-bottom">
                                    <textarea
                                        className="border-0 px-3 w-100 shadow-none form-control"
                                        placeholder="Description Here"
                                        rows="3"
                                    ></textarea>
                                    </div>
                                    <div className="p-2 ps-3 border-bottom">
                                    <select
                                        id=""
                                        className="form-select p-0 border-0 shadow-none"
                                    >
                                        <option value="">
                                        Select Delivery Time
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                    <div className="p-2 ps-3 border-bottom">
                                    <select
                                        id=""
                                        className="form-select p-0 border-0 shadow-none"
                                    >
                                        <option value="">Revision</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                    <div className="pack-description">
                                    <input
                                        className="border-0 px-3 w-100 shadow-none form-control"
                                        placeholder="Price Here"
                                        rows="1"
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="gig-pricing-pack border-end">
                                    <div className="p-2 ps-3 border-bottom">
                                    <span className="pricing-pack-name">Standard</span>
                                    </div>
                                    <div className="pack-description border-bottom">
                                    <textarea
                                        className="border-0 px-3 w-100 shadow-none form-control"
                                        placeholder="Description Here"
                                        rows="3"
                                    ></textarea>
                                    </div>
                                    <div className="p-2 ps-3 border-bottom">
                                    <select
                                        id=""
                                        className="form-select p-0 border-0 shadow-none"
                                    >
                                        <option value="">
                                        Select Delivery Time
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                    <div className="p-2 ps-3 border-bottom">
                                    <select
                                        id=""
                                        className="form-select p-0 border-0 shadow-none"
                                    >
                                        <option value="">Revision</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                    <div className="pack-description">
                                    <input
                                        className="border-0 px-3 w-100 shadow-none form-control"
                                        placeholder="Price Here"
                                        rows="1"
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="gig-pricing-pack">
                                    <div className="p-2 ps-3 border-bottom">
                                    <span className="pricing-pack-name">Premium</span>
                                    </div>

                                    <div className="pack-description border-bottom">
                                    <textarea
                                        className="border-0 px-3 w-100 shadow-none form-control"
                                        placeholder="Description Here"
                                        rows="3"
                                    ></textarea>
                                    </div>
                                    <div className="p-2 ps-3 border-bottom">
                                    <select
                                        id=""
                                        className="form-select p-0 border-0 shadow-none"
                                    >
                                        <option value="">
                                        Select Delivery Time
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                    <div className="p-2 ps-3 border-bottom">
                                    <select
                                        id=""
                                        className="form-select p-0 border-0 shadow-none"
                                    >
                                        <option value="">Revision</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                    <div className="pack-description">
                                    <input
                                        className="border-0 px-3 w-100 shadow-none form-control"
                                        placeholder="Price Here"
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="gig-info-card">
                            
                            <div className="gig-info-header">
                            <h4 className="text-18 fw-semibold text-dark-300">
                                Upload Gig Images
                            </h4>
                            </div>
                            <div className="gig-info-body bg-white">
                            <p className="text-dark-200 mb-2">Gig Images</p>
                            <div className="d-flex flex-wrap gap-3">
                                <div>
                                <label
                                    htmlFor="gig-img"
                                    className="border text-center gig-file-upload"
                                >
                                    <img
                                    src="assets/img/dashboard/gigs/gallery-icon.png"
                                    alt=""
                                    />
                                    <p className="text-dark-200">Max.Size 10MB</p>
                                    <input
                                    className="d-none"
                                    type="file"
                                    name=""
                                    id="gig-img"
                                    />
                                </label>
                                </div>
                                <div className="position-relative gig-media-thumb">
                                <img
                                    src="assets/img/dashboard/gigs/g-1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <button className="gig-img-delete-btn">
                                    <svg
                                    width="12"
                                    height="14"
                                    viewBox="0 0 12 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M7.85995 5.03223C7.69026 5.03223 7.55273 5.16976 7.55273 5.33945V11.1459C7.55273 11.3155 7.69026 11.4531 7.85995 11.4531C8.02965 11.4531 8.16718 11.3155 8.16718 11.1459V5.33945C8.16718 5.16976 8.02965 5.03223 7.85995 5.03223Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M4.23593 5.03223C4.06624 5.03223 3.92871 5.16976 3.92871 5.33945V11.1459C3.92871 11.3155 4.06624 11.4531 4.23593 11.4531C4.40562 11.4531 4.54315 11.3155 4.54315 11.1459V5.33945C4.54315 5.16976 4.40562 5.03223 4.23593 5.03223Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M1.59326 4.18476V11.754C1.59326 12.2014 1.75731 12.6216 2.04389 12.923C2.32915 13.2253 2.72613 13.3969 3.1416 13.3976H8.95431C9.3699 13.3969 9.76688 13.2253 10.052 12.923C10.3386 12.6216 10.5027 12.2014 10.5027 11.754V4.18476C11.0723 4.03355 11.4415 3.48319 11.3653 2.89863C11.2889 2.31419 10.791 1.877 10.2016 1.87688H8.62861V1.49286C8.63041 1.16992 8.50272 0.859816 8.2741 0.631681C8.04549 0.403665 7.73491 0.276697 7.41197 0.279337H4.68394C4.361 0.276697 4.05042 0.403665 3.82181 0.631681C3.59319 0.859816 3.4655 1.16992 3.4673 1.49286V1.87688H1.89436C1.30488 1.877 0.806967 2.31419 0.730642 2.89863C0.654437 3.48319 1.02358 4.03355 1.59326 4.18476ZM8.95431 12.7832H3.1416C2.61633 12.7832 2.2077 12.332 2.2077 11.754V4.21176H9.88821V11.754C9.88821 12.332 9.47958 12.7832 8.95431 12.7832ZM4.08174 1.49286C4.0797 1.33289 4.14259 1.17892 4.25612 1.06599C4.36952 0.953062 4.52385 0.891018 4.68394 0.893778H7.41197C7.57206 0.891018 7.72639 0.953062 7.83979 1.06599C7.95332 1.1788 8.01621 1.33289 8.01416 1.49286V1.87688H4.08174V1.49286ZM1.89436 2.49132H10.2016C10.507 2.49132 10.7545 2.7389 10.7545 3.04432C10.7545 3.34974 10.507 3.59732 10.2016 3.59732H1.89436C1.58894 3.59732 1.34136 3.34974 1.34136 3.04432C1.34136 2.7389 1.58894 2.49132 1.89436 2.49132Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M6.04794 5.03223C5.87825 5.03223 5.74072 5.16976 5.74072 5.33945V11.1459C5.74072 11.3155 5.87825 11.4531 6.04794 11.4531C6.21763 11.4531 6.35516 11.3155 6.35516 11.1459V5.33945C6.35516 5.16976 6.21763 5.03223 6.04794 5.03223Z"
                                        fill="white"
                                    />
                                    </svg>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="gig-info-card">
                            
                            <div className="gig-info-header">
                            <h4 className="text-18 fw-semibold text-dark-300">
                                Add a Video
                            </h4>
                            </div>
                            <div className="gig-info-body bg-white">
                            <div className="d-flex gap-3 flex-wrap">
                                <div>
                                <label
                                    htmlFor="gig-img"
                                    className="border text-center gig-file-upload"
                                >
                                    <img
                                    src="assets/img/dashboard/gigs/gallery-icon.png"
                                    alt=""
                                    />
                                    <p className="text-dark-200">Max.Size 300MB</p>
                                    <input
                                    className="d-none"
                                    type="file"
                                    name=""
                                    id="gig-img"
                                    />
                                </label>
                                </div>
                                <div className="position-relative gig-media-thumb">
                                <img
                                    src="assets/img/dashboard/gigs/g-2.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <button className="gig-img-delete-btn">
                                    <svg
                                    width="12"
                                    height="14"
                                    viewBox="0 0 12 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M7.85995 5.03223C7.69026 5.03223 7.55273 5.16976 7.55273 5.33945V11.1459C7.55273 11.3155 7.69026 11.4531 7.85995 11.4531C8.02965 11.4531 8.16718 11.3155 8.16718 11.1459V5.33945C8.16718 5.16976 8.02965 5.03223 7.85995 5.03223Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M4.23593 5.03223C4.06624 5.03223 3.92871 5.16976 3.92871 5.33945V11.1459C3.92871 11.3155 4.06624 11.4531 4.23593 11.4531C4.40562 11.4531 4.54315 11.3155 4.54315 11.1459V5.33945C4.54315 5.16976 4.40562 5.03223 4.23593 5.03223Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M1.59326 4.18476V11.754C1.59326 12.2014 1.75731 12.6216 2.04389 12.923C2.32915 13.2253 2.72613 13.3969 3.1416 13.3976H8.95431C9.3699 13.3969 9.76688 13.2253 10.052 12.923C10.3386 12.6216 10.5027 12.2014 10.5027 11.754V4.18476C11.0723 4.03355 11.4415 3.48319 11.3653 2.89863C11.2889 2.31419 10.791 1.877 10.2016 1.87688H8.62861V1.49286C8.63041 1.16992 8.50272 0.859816 8.2741 0.631681C8.04549 0.403665 7.73491 0.276697 7.41197 0.279337H4.68394C4.361 0.276697 4.05042 0.403665 3.82181 0.631681C3.59319 0.859816 3.4655 1.16992 3.4673 1.49286V1.87688H1.89436C1.30488 1.877 0.806967 2.31419 0.730642 2.89863C0.654437 3.48319 1.02358 4.03355 1.59326 4.18476ZM8.95431 12.7832H3.1416C2.61633 12.7832 2.2077 12.332 2.2077 11.754V4.21176H9.88821V11.754C9.88821 12.332 9.47958 12.7832 8.95431 12.7832ZM4.08174 1.49286C4.0797 1.33289 4.14259 1.17892 4.25612 1.06599C4.36952 0.953062 4.52385 0.891018 4.68394 0.893778H7.41197C7.57206 0.891018 7.72639 0.953062 7.83979 1.06599C7.95332 1.1788 8.01621 1.33289 8.01416 1.49286V1.87688H4.08174V1.49286ZM1.89436 2.49132H10.2016C10.507 2.49132 10.7545 2.7389 10.7545 3.04432C10.7545 3.34974 10.507 3.59732 10.2016 3.59732H1.89436C1.58894 3.59732 1.34136 3.34974 1.34136 3.04432C1.34136 2.7389 1.58894 2.49132 1.89436 2.49132Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M6.04794 5.03223C5.87825 5.03223 5.74072 5.16976 5.74072 5.33945V11.1459C5.74072 11.3155 5.87825 11.4531 6.04794 11.4531C6.21763 11.4531 6.35516 11.3155 6.35516 11.1459V5.33945C6.35516 5.16976 6.21763 5.03223 6.04794 5.03223Z"
                                        fill="white"
                                    />
                                    </svg>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div>
                            <button className="w-btn-secondary-lg">
                            Publish Gig Now
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                            >
                                <path
                                d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </main>
    </div>
    
    </>
  )
}

export default PostCreate
