import React, { Suspense } from "react";
import useIsNear from "../../hooks/useIsNear";
import LoadingText from "../loading/loading"

const TrendingSearches = React.lazy(
    () => import('./categoryCall')
)

export default function LazyTrending(){
    const {isNear, ref} = useIsNear()

    return <div ref={ref}>
        <Suspense fallback={<LoadingText />}>
            {isNear ? <TrendingSearches /> : <LoadingText />}
        </Suspense>
    </div>
}