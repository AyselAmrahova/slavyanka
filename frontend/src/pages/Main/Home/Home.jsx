import React from 'react'
// import "../Home/_homeStyle.scss"
import "../Home/_staticSectStyle.scss"
import "../Home/_3cardsStyle.scss"
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* STATIC SECTION */}
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
                  <Link
                    style={{ display: 'flex', alignItems: 'center', color: '#f8f9fa' }}
                    to='/products'>
                    Məhsullar
                    <img height={12} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgBzZFBDQAhDATbU3ASkIBUJOAECQ0KsICDsgS+LQkvJtnXTtrHEgFVjUhBfrJAKboQU0QRkPaI+JFPZebuXcmnNxfClsQVtjRnSVY/AKupn2s32eZUAAAAAElFTkSuQmCC" alt="fotod" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='staticSect-col-6-img'>
            <img height="600px" src="https://slavyanka.az/static/media/Hand.d194eb4c.png" alt="fotohtn" />
          </div>
        </div>
      </div>
      {/* 3-CARDS (ICON-NAME--TITLE EXAMPLES) */}
      <div className='container'>
        <div className="row">
          <div className='cards'>
            <div className="card-col-3">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAArCAYAAADWk770AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKpSURBVHgB7ZtLTuswFIaPnd7JHWVyJeBOLFZQltABrxmsALECYAXACoAVIFYQZkg81CXACiATJB6TjmnjYJeHAs1JnMR2bOg3aZXIVfTH/yenbgGm/B6u2MzuBZs9gBYh4Bnn7H+X0PRavud8tL4cP51CC3gV3BmbYQElfQKEvR8ajDhfWI0fYrAMBY/oUHqQCU0SdgiJoAW8CU56TbysTZwgpNuG77yoatZrGLZ953xwOV7DsOo756ua4zUMq75zOjjUaxgWfedsVVW8hmHDd04GV8FrGMZ952RVK3gNw7jvnAuustcwDPvOqao28RqGKd9pD27sJ1mTdLS5FD/fVBrXzGsYRnynvaqUkD0iagKkE/VZGKqO0+A1DCO+0xqc9JMIbkO+F+GxhP5Vcow2r2EY8J22qsqqiVlz9/14wpOdlfjxsGjs5fzcXQrAwDA6fadlxn34Ke9cQIPdc/avWzQ+4Lwn7uEADENp51heK2hAS3BjrwFhyOmwzHe9N3Hvg3m0+a5xcFmvYaj4bvH2/lCEfwSm0eS7Ro7DvIZR5rs+Y2FCX6598F3t4GquuwYpH/aK1nd98bkjGohFcKq8lKlJo/Vd7aqWeA3jx/iuVnAqXsP4Kb6rXNWqXsPw3XeVgtP8POm17ypVtabXMLz2nXJwTbyG4bPvlKqqy2sYPvquNDiD35NlKfXdJZtdS6mV7T8l35VWVbPXMAp9Jyq0bSm08bWo+K4wOBNew8jzXSSCvJifi8Tds/vbEAXfoVU17TWMD9/J/QegPLIw21GKfJcbnCWvYQwSSE8CIFvQPqjvcqtqyWsYoSOhSVDfTQRn02tegPjuS1Xb8poPfPfd54wr2jeYMrlf8Rlcy17zgS++Gwc39ZoiGd8R+Rw4DIat/FfAV/4ksP0K/oFuc6juIpYAAAAASUVORK5CYII=" alt="foto" />
              <p className='card-head'>Gədəbəy dağlarından</p>
              <p className='card-desc'>Gədəbəy dağlarından gələn saf və təbii suyu süfrənizlə bölüşürük.</p>
            </div>
            <div className="card-col-3-second">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgBzZpNctMwFMffU5LCAmayYUjLArU9AOkJmsyQznRFOQHJDcIJGk5AOUHDCVpWMAlMwg3CAaBi0Y9llwyNJd5zCE0aJ7ZlGfu3ccaW7b/kp6f3noJA9OV6GwTsgoEyhGAQlaf1m311pcLa9rY2jtEYCSnQOLusF3vblSYpeuufwfCbuEkBsUaHzQht64D4FFJCoMZXEBNElD35qAoZI8ASr3gv1MTSxlp8HhAG4CdYUEhpIsbBeuS10dmbDbs+sEAAPoOMEWgpHg3kwNsIGIENCHIgy5majijdlBTYUf4F9zMdfVFX6hpsPY7AA8gQ39sYY4ZgA4psR97XgMLK7oUxZ5Ahvvix9k4hJuRtVIGiS8gQX/zf8Day3fvCja7XI4TFaTK7wnaj3JAX4cyteK2HYY3zJJwpTn801NWwv7k+hEmisYBr4UZja0+ddyEB84EZig9BjfIonJkTX9SlLkm9XngZGJU34cyc+Mlqa94ttCJT+igrNUiIS+HMQjxf1GtHQaNfRDyEBLgWziyIXzX6n+TjNliQhnAmMJPi0aeyhbp7viAKh2Q+EmKQlnAmUDyPvtG6FXCpTOZzEjWOR23aaQn3n7/qYn9r44QOi2GvNkcNdfkaMmZlAk7m0woyH0oe231ZSTSBXRBa4OuzixRiEHiz1s3n6uo9ZERo6YPDBjoEhr5GiO5nWYldLnRFhNLqhKX2D8m+AC9+QogaPUN5AMP9GCt5ZPEDKctj/D2gO4JTP6079JViJSdfaN5oITpzJ40ZUS1phGC+jbXhDE8t61Bk8cyAfLxH9k8lQhnYIEYHAoVHgfLtsTEt7lAs8UxoB2jk6OEvV31+a+G37xjy5kLsWiVHl5S71gNdKINYpc2HQU/SpkUAiYVP3lHjg1WhddKBtR36eRr8bJQoxHF/a/1kNpxwInz2PZAQ8kIdOqxcsMjEuhQqXPPiBo5o/LjAxOKZ3vaTJtVwDpfOgxRg8U52Rva+n3d5HoBt5c0SZ9s6PA/YA5CPbi2dzI5xvic1/QpU/0w95nFi88vgNeEGsUPex3n842zChjHtBG3D7Lqa1P9N/CzsmaiUckDbkC8gAZmIn8KppFd4WNN6fMB1fgrEom/QGRg1zi52MhN/F+7MuPigSilm1YCW/saFgTJ1ivPlf/9fIG/2teR5zbzUS635A5ESkKApzECAAAAAAElFTkSuQmCC" alt="foto" />
              <p className='card-head'>Çağrı mərkəzi</p>
              <p className='card-desc'>*2121 Çağrı Mərkəmiz həftə içi 08:00-dan 18:30-a qədər, şənbə günləri 08:00-dan 18:00-a qədər, bazar günləri isə 09:30-dan 18:00-a qədər müraciətlərinizi qəbul etməyə hazırdır.</p>
            </div>
            <div className="card-col-3">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAyCAYAAADlaH1uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPVSURBVHgB7ZvdThpBFMfPGVZb2yblUu3NSh+g+AaQVIxX4hNU3wCfoPIE4hOIT6BeNRET6BvQ+4JrUtRLbpoaxTk9AxF3h/1gFU1k55cIMvt1+O/Mf2bOLAgah3Y6PQsztoBUGl4Jb+G6mXe6XZgA1v0/Soh3OFcRiOv88dWIobgWH/IA3QZMgL4gP+x5OyWwjoA2JByhXowYD4iTz/ObRowHBEr8BoYhAlBkwTCEPYReVY/y3AgweDCCaBhBNIwgGkYQDaxlFgmSAFHTon/5qElgcmoIYrYHc9+jdktWkxFYOrXnQ0fmifMQEqKiZvdB26fCQyTCMb8EeoNAWPeMyEP8xIIpQKKorJ39aQRtr2U+lfhtd1ig/ISUn3S39X0T0WRW2p0Kpzj2PIUBfpIYD/na7pSAoOku8/OTRJmqRXIDARxXUdpCPKxzPvm+IFGC5J0rh6Tc8hRq45PEdbsrzlWDVfCaqctPEjmXUSZLRAfusns/mYpxCH+5Bld9J84xOFh7KrrLJNHxVIxDEDEHEwCFSJvpv4YRRMMIomEE0TCCaBhBNIwgGkYQDSOIxmMFKYMQ+Z6cXVLv+rzgpeHkj0oFlimFy0+NKdbQXV04JYFzkR13osXhv8aJPd/goe8+vDBI4KToLq+m9qDFxKlDjpN245wvVg2RErY1MYYUnKsqqJrzwkjCsibGEL9ZbRSxBCk4nWrY9p6UodsnjaodUTEhUeh2HYsQfwZc7Is7dU/e1Jsva3ynOJ3gPQ83M14m+AUTQI9JCjyPOkYlhMaOiWTTKrQ6Ob8T1ZYW6jCBabUEOiq0LrZgAvAXc8D1DC1K+hh1TN220z24AW9M8qDQuiz57R/YZLhGeNTnhIrNGaUchHBqLxSjzvMU+K56/Qsh604Q+3Gbuh6JSYbU9mAPEaKhF3GGOnCxWD0JLQWMOLr0Oc9jEYQNvawn5gJ7tv4SA43G/EbSUeA1gjbM3M3wQdryIDehWmbhUF/LUJ/f49zIw7/K9NZ+B6+oxcWSM9WRmACLJ5nFfZ+Ycr4PJPPaTFCv1D8bhMBtdoff/GsF5zHZkB12cTvIa0jiVlQvEJcxY8qq5QW/XSTSxmrrMrCGhArSD+CR5kpAe4W2v3E9hb5J4k1d+QfEhL2jvNq+2AnbJ3IcYtGbDX0JMAo1GHoOMRR5x+n6rMBFx8Q3KEoMRaQgKoCVs4tlGGMUOphT0Hbh7HITnhHlASk5uzyygB0W05g3KLLJuKmzcfVEqkgIRcGDJBoMks4H7RaOLPm3Oqkf8sSJ6ZZX3tQj6u6YVBeteqW4Mf0Hs0iLuXXKl2UAAAAASUVORK5CYII=" alt="foto" />
              <p className='card-head'>Pulsuz çatdırılma</p>
              <p className='card-desc'>Siz sifariş edin, biz pulsuz çatdıraq! Bir zənglə 24 saat ərzində suyunuzu qapınıza gətirək!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
