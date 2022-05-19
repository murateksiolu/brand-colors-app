import React from "react"
import ContentLoader from "react-content-loader"

function Loader(props) {
    return (
        <ContentLoader
            speed={1}
            width={400}
            height={106}
            viewBox="0 0 400 106"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="10" y="40" rx="4" ry="4" width="70" height="40" />
            <rect x="10" y="10" rx="0" ry="0" width="200" height="18" />
            <rect x="90" y="40" rx="4" ry="4" width="70" height="40" />
            <rect x="170" y="40" rx="4" ry="4" width="70" height="40" />
            <rect x="250" y="40" rx="4" ry="4" width="70" height="40" />
            <rect x="330" y="40" rx="4" ry="4" width="70" height="40" />
        </ContentLoader>
    )
}

export default Loader