import React from 'react'
import ContentLoader from 'react-content-loader';

const MyLoader = ({width,height}) => (
    <ContentLoader 
        speed={2}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        width={width}
        height={height}
    >
        <rect x="0" y="0" rx="20" ry="20" width={width} height={height} />
    </ContentLoader>
)

export default MyLoader;

