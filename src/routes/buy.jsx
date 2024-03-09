import { useLoaderData } from 'react-router-dom';
import Pricing from '../ui/Pricing';

import { fetchPricingData } from '../lib/loaders.js';

export async function loader() {
    let pricingData = await fetchPricingData();
    return pricingData;
}

export default function Princing() {
    const data = useLoaderData();

    return (
        <>
            <Pricing {...data} />
        </>
    );
}