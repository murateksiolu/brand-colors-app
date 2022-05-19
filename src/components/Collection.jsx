import { useContext, useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import MainContext from '../MainContext'
import Brand from './Brand'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import { GrLinkPrevious } from 'react-icons/gr'
import Loader from './Loader'

function Collection(props) {
    const { slugs } = useParams()
    const navigate = useNavigate()
    const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext)

    const clearSelectedBrands = () => {
        setSelectedBrands([])
        navigate('/')
    }
    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])

    return (
        <main className="content">
            <header className="header">
                <Link to="/" className="all-brands-btn" onClick={clearSelectedBrands}>
                    <GrLinkPrevious />
                    All Brands
                </Link>
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <LazyLoad key={'L' + brand.title} once={true} placeholder={<Loader />} overflow={true}>
                            <Brand key={brand.title} brand={brand} />
                        </LazyLoad>
                    )
                })}
            </section>
        </main >
    )
}

export default Collection