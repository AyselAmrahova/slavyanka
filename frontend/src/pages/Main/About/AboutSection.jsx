import React from 'react'
import './_aboutStyle.scss'

export default function AboutSection() {
    return (
        <>
            <img className='about-img' src="https://slavyanka.az/static/media/banner.3f0bf8e7.jpg" width='100%' alt="banner" />
            <div className='container'>
                <div className='about-row'>
                    <div className='about-first'>
                        <h3>Haqqımızda:</h3>
                        <p>Gədəbəy rayonunun şimalında, sıra dağların qoynunda dadı dillər əzbəri olan bulaqlar axır. “Slavyanka” 2004-cü ildən etibarən o saf və təbii bulaqların suyunu süfrələrinizə gətirir. İstehlakçılara təqdim etdiyimiz ilk suyun mənbəyi Gədəbəyin Slavyanka kəndində yerləşən “Novlu” bulağıdır. Adımızın tarixi məhz buradan gəlir. İllər keçdikcə saf və təbii suya artan tələbat artdı və biz 2010-cu ildə Gədəbəy rayonunun Zəhmət kəndində dünya standartlarına uyğun yeni texnologiyalarla təchiz olunmuş “Gədəbəy Mineral Suları” fabrikini istifadəyə verdik. Hal-hazırda “Slavyanka” suları dəniz səviyyəsindən 1500 metr yüksəklikdə Gədəbəy dağlarında yerləşən 12 bulağın suyundan formalaşır. Bulaqlardan gələn su fabrikdə toplanaraq, mineral tərkibi qorumaqla təmizləmə prosedurlarından keçir və ölkəmizin bütün regionlarına çatdırılır.</p>
                    </div>
                    <img className='about-first-img' src="https://slavyanka.az/static/media/lifestyle.32589d6d.png" alt="banner" />
                    <div className='about-second'>
                        <div className='about-second-img-div'>
                            <img src="https://slavyanka.az/static/media/nbanner.9081d0fd.png" alt="banner" />
                        </div>
                        <div className='about-second-text-div'>
                            <h1 className="text-danger">Sular:</h1>
                            <p>“Slavyanka” suyu saf və təbii bulaq suyudur. Bu suyun fiziki və kimyəvi tərkibi içməli suyun normalarına tam uyğundur. Üstünlüyü onun codluq göstəricilərinin aşağı olması, yəni yüngül su olmasıdır. Tərkibində nitrit və nitratlar yoxdur. "Slavyanka" suyunun üstünlüyü onun codluq göstəricilərinin aşağı olması, yəni yüngül su olmasıdır. Sularımız İSO sertifikatı ilə istehsal olunur və bütün standartlara cavab verir. Bu gün Gədəbəy sularının bazarda fərqlənməsinin bir səbəbi də tam minerallarla zəngin olmasıdır. Bütün məhsullar tam avtomatlaşdırılmış şəkildə, insan əli dəymədən istehsal olunur.</p>
                        </div>
                    </div>
                    <div className='about-third'>
                        <div className='about-third-text-div'>
                            <h1 className="text-danger">Faydaları: </h1>
                            <p>Bulaq suyunun minerallarla zəngin olması həm də onun müalicəvi məqsədlərlə istifadəsini təyin edir. “Slavyanka” və “Gədəbəy” sularının tərkibindəki metaselikat turşusu böyrək və öd yolları üçün faydalıdır. pH-ı 8,2 olduğuna görə bu su insanlarda piylənmənin qarşısını alır, antioksidant təsirə malikdir.</p>
                        </div>
                        <div className='about-third-img-div'>
                            <img src="https://slavyanka.az/static/media/lemonade.e3b69f03.png" alt="banner" width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
