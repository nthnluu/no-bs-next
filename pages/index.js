import PageLayout from "../components/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <div className="h-screen flex justify-center items-center px-12">
                <div className="text-center">
                    <img src="/logos.png" className="h-28 md:h-32 lg:h-48 mx-auto"/>
                    <h1 className="text-4xl font-bold text-gray-900">No BS Next</h1>
                    <h2 className="text-2xl text-gray-700 mb-12">The fast way to build secure, full-stack web apps.</h2>
                </div>
            </div>
        </PageLayout>
    )
}
