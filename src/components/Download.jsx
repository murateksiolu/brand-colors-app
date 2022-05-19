import { useContext, useState, useEffect } from 'react'
import MainContext from '../MainContext'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'

function Download(props) {

    const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext)
    const [downloadURL, setDownloadURL] = useState()
    const [exportFileExt, changeExportFileExt] = useState('css')

    useEffect(() => {
        if (selectedBrands.length > 0) {

            let output = '';
            switch (exportFileExt) {
                case 'css':
                    output += ":root{ \n";
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug);
                        brand.colors.map((color, key) => {
                            output += `    --${slug}-${key + 1}: #${color};\n`;
                        })
                    })
                    output += `}`;
                    break;
                case 'scss':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug);
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-${key + 1}: #${color};\n`;
                        })
                    })
                    break;
                case 'less':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug);
                        brand.colors.map((color, key) => {
                            output += `@${slug}-${key + 1}: #${color};\n`;
                        })
                    })
                    break;
                default:
                    break;
            }

            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadURL(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadURL('')
            }
        }
    }, [selectedBrands, exportFileExt])

    const getLink = () => {
        prompt('Here\'s the URL to share', `http://localhost:3000/collection/${selectedBrands.join(',')}`)
    }
    return (
        <div className="download">
            <div className="actions">
                <select onChange={(e => changeExportFileExt(e.target.value))}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
                <a download={`brandColors.${exportFileExt}`} href={downloadURL}>
                    <GrDownload />
                </a>
                <button onClick={getLink}>
                    <GrLink />
                </button>
            </div>
            <div className="selected" onClick={() => setSelectedBrands([])}>
                <GrClose />
                {selectedBrands.length} brands collected
            </div>

        </div >
    )
}

export default Download