import PageLayout from "../components/PageLayout";

export default function Home() {

    return (
        <PageLayout title="Welcome to No BS Next!">
            <div className="h-screen flex justify-center items-center px-12 bg-gray-50">
                <div className="text-center">
                    <img src="/no-bs-next_logo.png" className="h-16 md:h-24 lg:h-32 mx-auto mb-8"/>
                    <h1 className="text-4xl font-bold text-gray-900">No BS Next</h1>
                    <h2 className="text-2xl text-gray-700 mb-12">The fast way to build secure, full-stack web apps.</h2>
                </div>
            </div>
        </PageLayout>
    )
}
