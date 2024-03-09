import { Await, defer, useLoaderData } from "react-router-dom";
import Teams from "../ui/Team";
import TeamSkeleton from "../ui/Team/TeamSkeleton";
import Testimonial from "../ui/Testimonial";
import { fetchOurTeams } from "../lib/loaders";
import { fetchTestimonialData } from "../lib/loaders";
import { Suspense } from 'react';


export async function loader({ params }) {
    let data = {
        'team': fetchOurTeams(params.teamName),
        'testimonials': await fetchTestimonialData(params.teamName),
    };
    return defer(data);
}

export default function OurTeams() {
    let data = useLoaderData();

    return (
        <>
            <Suspense fallback={<TeamSkeleton />}>
                <Await resolve={data.team}>
                    {teamData => <Teams {...teamData} />}
                </Await>
            </Suspense>
            <Testimonial data={data.testimonials} />


        </>
    );
}
