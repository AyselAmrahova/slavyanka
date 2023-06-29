const ProductItem = (props) => {
    console.log(props.product)
  return (
    <div className='products-col'>
            <div className='col'>
              <div className='product-card'>
                <div className='product-img-div'>
                  <img className='product-img' width={250} height={250} src={props.product.imageURL} alt="" />
                  <div className='product-text'>
                    <p>{props.product.name}</p>
                    <p style={{ marginTop: "0.25rem", color: '#dc3545' }}>{props.product.count} ədəd</p>
                  </div>
                  <div className='product-count-basket'>
                    <p>{props.product.price} AZN</p>
                    <div className='product-basket'>
                      <img width={21} height={21} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHGSURBVHgBzVVBTuNAEKwee1c5rbw/8BPMZUNW2mX2B7svWCNy4Aa8gPAC4IaEEeEF5Ac4RBDgEviBf0AuICTCND2GSHY0FpDkQB2smZ5STU3PdJt0Pw5ZeQOAAgjMEzZ6P5MdzAEK3pdgLJwHPGxiTiD70YP1APd3Ift8IlPZiDPMAlbX3cX9f1SM/e43W6Tm45y+jr6rYkDVRjbXQ8wIcbyVLrSHJXEbYINdzATKYPy2HanJpVf3U8MYcd3Yy5ziuXvgCFOBsl5jvz2eKRdFGb+FKWBdl7aqIi5dNU/A0Hgn5LTd03pS4qtKMiPFByCnjSdjvouYtwRw/HIwvmFQ9fNkDJmp03u9xDfFjfJaBArtBXXrSYQp4RQX4f+5KcNHi/3VEO/ExYR754UuXTZvkfeYD4KQdn8kf8ZT5ebwcl5pnxnOtOizOGLP35bVQE6xldYPOlUCv86b68rjNTBlxKPltNHOxmvOtLDvHYuwlmEkz/BYD2Jn/u2TlZ/LtngMLV8MHRbXK4pIyEU8+BXPUemyK0RvijNxoe1SljaS1MVDzXSKFy85LrXryt6iL1f+wnCA2rdOurBTWaHa1oF6jGBoOGniGew+mLbFJMRAAAAAAElFTkSuQmCC" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ProductItem