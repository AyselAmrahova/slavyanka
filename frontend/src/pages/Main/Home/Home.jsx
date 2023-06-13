import React from 'react'
import "../Home/_homeStyle.scss"

export default function Home() {
  return (
    <>
      <div className='staticSect'>
        <div className='staticSect-row'>
          <div className='staticSect-col-6'>
            <h3 class="my-5 pt-5">Evdə, ofisdə, həyatın hər anında!</h3>
            <p class="my-5">Slavyanka sifariş edin, biz cəmi 24 saat ərzində ünvanınıza çatdırırıq</p>
            <div className='staticSect-call'>
              <div className='staticSect-call-icon'>
                <img src="https://slavyanka.az/static/media/PhoneLight.b5e0dced.svg" alt="phonefoto" />
                <p>*2121</p>
              </div>
              <div className='staticSect-products'>
                <div className='staticSect-pro'>
                  Məhsullar
                  <img height={12} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgBzZFBDQAhDATbU3ASkIBUJOAECQ0KsICDsgS+LQkvJtnXTtrHEgFVjUhBfrJAKboQU0QRkPaI+JFPZebuXcmnNxfClsQVtjRnSVY/AKupn2s32eZUAAAAAElFTkSuQmCC" alt="fotod" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
