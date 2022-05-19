import SearchBar from './SearchBar'
import Brand from './Brand'
import MainContext from '../MainContext'
import { useContext } from 'react'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import Loader from './Loader'

function Content(props) {
    const { brands, selectedBrands } = useContext(MainContext);

    return (
        <main className="content">
            <header className="header">
                <SearchBar />
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="brands">
                {brands.map((brand, index) => (
                    <LazyLoad key={'L' + brand.title + index} once={true} placeholder={<Loader />} overflow={true}>
                        <Brand key={brand.title + index} brand={brand} />
                    </LazyLoad>
                ))}
            </section>
        </main>
    )
}
export default Content